[**@sitecore-jss/sitecore-jss-nextjs**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-nextjs](../../README.md) / [middleware](../README.md) / MultisiteMiddlewareConfig

# Type Alias: MultisiteMiddlewareConfig

> **MultisiteMiddlewareConfig**: `Omit`\<[`MiddlewareBaseConfig`](MiddlewareBaseConfig.md), `"disabled"`\> & `object`

## Type declaration

### useCookieResolution()?

> `optional` **useCookieResolution**: (`req`) => `boolean`

Function used to determine if site should be resolved from sc_site cookie when present

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `NextRequest` |

#### Returns

`boolean`

## Defined in

[sitecore-jss-nextjs/src/middleware/multisite-middleware.ts:21](https://github.com/Sitecore/jss/blob/dee092415f12bcdad68eb71976eb7c8871273c91/packages/sitecore-jss-nextjs/src/middleware/multisite-middleware.ts#L21)
