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

[sitecore-jss-proxy/src/middleware/editing/index.ts:104](https://github.com/Sitecore/jss/blob/14c94b27afbe004fefaf1cab8e080470a80ff3f4/packages/sitecore-jss-proxy/src/middleware/editing/index.ts#L104)
