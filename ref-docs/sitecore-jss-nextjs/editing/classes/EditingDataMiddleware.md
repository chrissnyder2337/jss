[**@sitecore-jss/sitecore-jss-nextjs**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-nextjs](../../README.md) / [editing](../README.md) / EditingDataMiddleware

# Class: EditingDataMiddleware

Middleware / handler for use in the editing data Next.js API dynamic route (e.g. '/api/editing/data/[key]')
which is required for Sitecore editing support.

## Constructors

### new EditingDataMiddleware()

> **new EditingDataMiddleware**(`config`?): [`EditingDataMiddleware`](EditingDataMiddleware.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`EditingDataMiddlewareConfig`](../interfaces/EditingDataMiddlewareConfig.md) | Editing data middleware config |

#### Returns

[`EditingDataMiddleware`](EditingDataMiddleware.md)

#### Defined in

[sitecore-jss-nextjs/src/editing/editing-data-middleware.ts:41](https://github.com/Sitecore/jss/blob/fe1d78ae02ea5d97f1dff80e45e93416079d4dc7/packages/sitecore-jss-nextjs/src/editing/editing-data-middleware.ts#L41)

## Methods

### getHandler()

> **getHandler**(): (`req`, `res`) => `Promise`\<`void`\>

Gets the Next.js API route handler

#### Returns

`Function`

route handler

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `NextApiRequest` |
| `res` | `NextApiResponse` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[sitecore-jss-nextjs/src/editing/editing-data-middleware.ts:50](https://github.com/Sitecore/jss/blob/fe1d78ae02ea5d97f1dff80e45e93416079d4dc7/packages/sitecore-jss-nextjs/src/editing/editing-data-middleware.ts#L50)
