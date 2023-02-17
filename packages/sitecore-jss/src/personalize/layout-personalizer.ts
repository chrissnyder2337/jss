import {
  ComponentRendering,
  HtmlElementRendering,
  LayoutServiceData,
  PlaceholdersData,
  RouteData,
} from './../layout/models';

export type ComponentRenderingWithExperiences = ComponentRendering & {
  experiences: { [name: string]: ComponentRenderingWithExperiences };
};


/**

 * @param {Array} components components within placeholder
 * @param {string} variantId variant id
 * @returns {Array<ComponentRendering | HtmlElementRendering>} components with personalization applied
 */
export function personalizePlaceholder(
  components: Array<ComponentRendering | HtmlElementRendering>,
  variantId: string
): Array<ComponentRendering | HtmlElementRendering> {
  return components
    .map((component) => {
      const rendering = component as ComponentRendering;

      if ((rendering as ComponentRenderingWithExperiences).experiences !== undefined) {
        return personalizeComponent(rendering as ComponentRenderingWithExperiences, variantId) as
          | ComponentRendering
          | HtmlElementRendering;
      } else if (rendering.placeholders) {
        const placeholders = rendering.placeholders as PlaceholdersData;

        Object.keys(placeholders).forEach((placeholder) => {
          placeholders[placeholder] = personalizePlaceholder(placeholders[placeholder], variantId);
        });
      }

      return component;
    })
    .filter(Boolean);
}

/**
 * @param {ComponentRenderingWithExperiences} component component with experiences
 * @param {string} variantId variant id
 * @returns {ComponentRendering | null} component with personalization applied or null if hidden
 */
export function personalizeComponent(
  component: ComponentRenderingWithExperiences,
  variantId: string
): ComponentRendering | null {
  const variant = component.experiences[variantId];
  if (variant === undefined && component.componentName === undefined) {
    // DEFAULT IS HIDDEN
    return null;
  } else if (variant && variant.componentName === null && variant.dataSource === null) {
    // HIDDEN
    return null;
  } else if (variant) {
    component = variant;
  }

  if (!component.placeholders) return component;

  Object.keys(component?.placeholders).forEach((placeholder) => {
    if (component.placeholders) {
      component.placeholders[placeholder] = personalizePlaceholder(
        component.placeholders[placeholder],
        variantId
      );
    }
  });

  return component;
}
