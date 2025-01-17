[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [index](../README.md) / NativeDataFetcherResponse

# Interface: NativeDataFetcherResponse\<T\>

Response data for an HTTP request sent to an API

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | the type of data model requested |

## Properties

### data

> **data**: `T`

Response content

#### Defined in

[packages/sitecore-jss/src/native-fetcher.ts:29](https://github.com/Sitecore/jss/blob/dee092415f12bcdad68eb71976eb7c8871273c91/packages/sitecore-jss/src/native-fetcher.ts#L29)

***

### headers?

> `optional` **headers**: `HeadersInit`

Response headers

#### Defined in

[packages/sitecore-jss/src/native-fetcher.ts:31](https://github.com/Sitecore/jss/blob/dee092415f12bcdad68eb71976eb7c8871273c91/packages/sitecore-jss/src/native-fetcher.ts#L31)

***

### status

> **status**: `number`

HTTP status code of the response (i.e. 200, 404)

#### Defined in

[packages/sitecore-jss/src/native-fetcher.ts:25](https://github.com/Sitecore/jss/blob/dee092415f12bcdad68eb71976eb7c8871273c91/packages/sitecore-jss/src/native-fetcher.ts#L25)

***

### statusText

> **statusText**: `string`

HTTP status text of the response (i.e. 'OK', 'Bad Request')

#### Defined in

[packages/sitecore-jss/src/native-fetcher.ts:27](https://github.com/Sitecore/jss/blob/dee092415f12bcdad68eb71976eb7c8871273c91/packages/sitecore-jss/src/native-fetcher.ts#L27)
