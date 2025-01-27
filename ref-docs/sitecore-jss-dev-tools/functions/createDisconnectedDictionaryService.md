[**@sitecore-jss/sitecore-jss-dev-tools**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-dev-tools](../README.md) / createDisconnectedDictionaryService

# Function: createDisconnectedDictionaryService()

> **createDisconnectedDictionaryService**(`__namedParameters`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DisconnectedDictionaryServiceOptions`](../interfaces/DisconnectedDictionaryServiceOptions.md) |

## Returns

`object`

### middleware()

> **middleware**: (`request`, `response`) => `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `any` |
| `response` | `any` |

#### Returns

`Promise`\<`void`\>

### updateManifest()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newManifest` | [`ManifestInstance`](../interfaces/ManifestInstance.md) |

#### Returns

`void`

## Defined in

[sitecore-jss-dev-tools/src/disconnected-server/dictionary-service.ts:42](https://github.com/Sitecore/jss/blob/795da9a2f7e0b0616ce17b431c18f0bb0e6cda23/packages/sitecore-jss-dev-tools/src/disconnected-server/dictionary-service.ts#L42)
