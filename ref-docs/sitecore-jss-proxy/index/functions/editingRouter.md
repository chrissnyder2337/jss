[**@sitecore-jss/sitecore-jss-proxy**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-proxy](../../README.md) / [index](../README.md) / editingRouter

# Function: editingRouter()

> **editingRouter**(`options`): `Router`

Creates a router for editing requests.
Supports the following routes:
- <routerPath>/render (GET) - renders a route
- <routerPath>/config (GET) - returns the current application configuration

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `EditingRouterConfig` | Editing router configuration |

## Returns

`Router`

Editing router

## Defined in

[sitecore-jss-proxy/src/middleware/editing/index.ts:104](https://github.com/Sitecore/jss/blob/f1572afbfc8b17fc798c9a1c6949529e432bf0ed/packages/sitecore-jss-proxy/src/middleware/editing/index.ts#L104)
