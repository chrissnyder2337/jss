[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [index](../README.md) / HttpResponse

# Interface: HttpResponse\<T\>

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

[packages/sitecore-jss/src/data-fetcher.ts:15](https://github.com/Sitecore/jss/blob/85fd9b813b01a71614ef7fb536485926ec8242cf/packages/sitecore-jss/src/data-fetcher.ts#L15)

***

### status

> **status**: `number`

HTTP status code of the response (i.e. 200, 404)

#### Defined in

[packages/sitecore-jss/src/data-fetcher.ts:11](https://github.com/Sitecore/jss/blob/85fd9b813b01a71614ef7fb536485926ec8242cf/packages/sitecore-jss/src/data-fetcher.ts#L11)

***

### statusText

> **statusText**: `string`

HTTP status text of the response (i.e. 'OK', 'Bad Request')

#### Defined in

[packages/sitecore-jss/src/data-fetcher.ts:13](https://github.com/Sitecore/jss/blob/85fd9b813b01a71614ef7fb536485926ec8242cf/packages/sitecore-jss/src/data-fetcher.ts#L13)
