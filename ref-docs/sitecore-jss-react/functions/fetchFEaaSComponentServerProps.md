[**@sitecore-jss/sitecore-jss-react**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react](../README.md) / fetchFEaaSComponentServerProps

# Function: fetchFEaaSComponentServerProps()

> **fetchFEaaSComponentServerProps**(`params`, `pageState`?, `endpointOverride`?): `Promise`\<[`FEaaSComponentProps`](../type-aliases/FEaaSComponentProps.md)\>

Fetches server component props required for server rendering, based on rendering params.
Component endpoint will either be retrieved from params or from endpointOverride

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`FEaaSComponentParams`](../type-aliases/FEaaSComponentParams.md) | component params |
| `pageState`? | [`LayoutServicePageState`](../enumerations/LayoutServicePageState.md) | page state to determine which component variant to use |
| `endpointOverride`? | `string` | optional override for component endpoint |

## Returns

`Promise`\<[`FEaaSComponentProps`](../type-aliases/FEaaSComponentProps.md)\>

## Defined in

[packages/sitecore-jss-react/src/components/FEaaSComponent.tsx:107](https://github.com/Sitecore/jss/blob/795da9a2f7e0b0616ce17b431c18f0bb0e6cda23/packages/sitecore-jss-react/src/components/FEaaSComponent.tsx#L107)
