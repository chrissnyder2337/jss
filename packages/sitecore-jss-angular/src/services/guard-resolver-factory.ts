import { Injector, Type } from '@angular/core';
import { ActivatedRoute, RedirectCommand, Router, UrlTree } from '@angular/router';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss/layout';
import { lastValueFrom, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ComponentFactoryResult } from './jss-component-factory.service';
import { wrapIntoObservable } from '../utils';
import { JssCanActivateRedirectError } from './jss-can-activate-error';
import { JssCanActivate, JssCanActivateFn } from './placeholder.token';

/**
 * @param {boolean | string | string[] | UrlTree | RedirectCommand} value
 * @returns instance of value
 */
function isRedirectValue(
  value: boolean | string | string[] | UrlTree | RedirectCommand
): value is string | string[] | UrlTree | RedirectCommand {
  return (
    value instanceof UrlTree ||
    value instanceof RedirectCommand ||
    typeof value === 'string' ||
    Array.isArray(value)
  );
}

/**
 * Resolves components based on provided guards
 * @param {Injector} injector
 * @param {ActivatedRoute} activatedRoute
 * @param {Router} router
 * @returns {(factories: ComponentFactoryResult[]) => Promise<ComponentFactoryResult[]>} factory
 */
export function guardResolverFactory(
  injector: Injector,
  activatedRoute: ActivatedRoute,
  router: Router
) {
  /**
   * @param {JssCanActivate | Type<JssCanActivate> | JssCanActivateFn} guard
   * @returns resolved guard
   */
  function getGuardInstance(
    guard: JssCanActivate | Type<JssCanActivate> | JssCanActivateFn
  ): JssCanActivate | JssCanActivateFn {
    if ('canActivate' in guard) {
      return guard;
    }

    try {
      // Class is provided
      return injector.get(guard);
    } catch {
      // Function is provided
      return guard as JssCanActivateFn;
    }
  }

  /**
   * @param {ComponentFactoryResult} factory
   * @returns {(JssCanActivate | JssCanActivateFn)[]} guard instances
   */
  function collectGuardInstances(
    factory: ComponentFactoryResult
  ): (JssCanActivate | JssCanActivateFn)[] {
    if (factory.canActivate) {
      return Array.isArray(factory.canActivate)
        ? factory.canActivate.map(getGuardInstance)
        : [getGuardInstance(factory.canActivate)];
    }

    return [];
  }

  /**
   *
   * @param {JssCanActivate | JssCanActivateFn} guard
   * @param {ComponentFactoryResult} factory
   * @returns canActivate
   */
  function resolveGuard(guard: JssCanActivate | JssCanActivateFn, factory: ComponentFactoryResult) {
    const canActivate = 'canActivate' in guard ? guard.canActivate.bind(guard) : guard;
    const guardValue = canActivate({
      activatedRoute: activatedRoute.snapshot,
      routerState: router.routerState.snapshot,
      rendering: factory.componentDefinition as ComponentRendering,
      router,
    });

    const canActivate$ = wrapIntoObservable(guardValue);

    return lastValueFrom(
      canActivate$.pipe(
        take(1),
        mergeMap((value) => {
          if (isRedirectValue(value)) {
            let message;

            if (value instanceof RedirectCommand) {
              message = value.redirectTo;
            } else {
              message = value;
            }

            throw new JssCanActivateRedirectError(
              `Value: '${message.toString()}' is a redirect value`,
              value
            );
          } else {
            return of(value);
          }
        })
      )
    );
  }

  return function resolveGuards(factories: ComponentFactoryResult[]) {
    const resolved = factories.map((factory) => {
      const guards = collectGuardInstances(factory);
      const pending = guards.map((guard) => resolveGuard(guard, factory));
      return Promise.all(pending)
        .then((canActive) => canActive.every((v) => v))
        .then((canActivate) => ({
          factory,
          canActivate,
        }));
    });

    return Promise.all(resolved).then((mapped) =>
      mapped.filter((m) => m.canActivate).map((m) => m.factory)
    );
  };
}
