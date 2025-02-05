[**@sitecore-jss/sitecore-jss-nextjs**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-nextjs](../../README.md) / [editing](../README.md) / editingDataService

# Variable: editingDataService

> `const` **editingDataService**: [`BasicEditingDataService`](../classes/BasicEditingDataService.md) \| [`ServerlessEditingDataService`](../classes/ServerlessEditingDataService.md)

The `EditingDataService` default instance.
This will be `ServerlessEditingDataService` on Vercel, `BasicEditingDataService` otherwise.

For information about the VERCEL environment variable, see
https://vercel.com/docs/environment-variables#system-environment-variables

## Defined in

[sitecore-jss-nextjs/src/editing/editing-data-service.ts:223](https://github.com/Sitecore/jss/blob/f0f6e64d75797af01d12051025c04b2b5c3ecf36/packages/sitecore-jss-nextjs/src/editing/editing-data-service.ts#L223)
