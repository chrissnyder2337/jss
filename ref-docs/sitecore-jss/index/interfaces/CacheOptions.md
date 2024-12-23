[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [index](../README.md) / CacheOptions

# Interface: CacheOptions

Minimum configuration options for classes that implement

## See

CacheClient

## Extended by

- [`GraphQLDictionaryServiceConfig`](../../i18n/interfaces/GraphQLDictionaryServiceConfig.md)

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Enable/disable caching mechanism

#### Default

```ts
true
```

#### Defined in

[packages/sitecore-jss/src/cache-client.ts:40](https://github.com/Sitecore/jss/blob/7ddd22dfa8f8d76cfb96e977ac1a0d48c3a13d89/packages/sitecore-jss/src/cache-client.ts#L40)

***

### cacheTimeout?

> `optional` **cacheTimeout**: `number`

Cache timeout (sec)

#### Default

```ts
60
```

#### Defined in

[packages/sitecore-jss/src/cache-client.ts:45](https://github.com/Sitecore/jss/blob/7ddd22dfa8f8d76cfb96e977ac1a0d48c3a13d89/packages/sitecore-jss/src/cache-client.ts#L45)
