[**@sitecore-jss/sitecore-jss-react**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react](../README.md) / getEEMarkup

# Function: getEEMarkup()

> **getEEMarkup**(`imageField`, `imageParams`?, `mediaUrlPrefix`?, `otherProps`?): `Element`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `imageField` | [`ImageField`](../interfaces/ImageField.md) | {ImageField} provides the dynamicMedia which is used to render the image |
| `imageParams`? | `object` | {ImageProp['imageParams']}} provides the image parameters that will be attached to the image URL |
| `mediaUrlPrefix`? | `RegExp` | {RegExp} the url prefix regex used in the mediaApi |
| `otherProps`? | [`ImageProps`](../interfaces/ImageProps.md) | {ImageProps} all other props included on the image component |

## Returns

`Element`

Experience Editor Markup

## Defined in

[packages/sitecore-jss-react/src/components/Image.tsx:118](https://github.com/Sitecore/jss/blob/795da9a2f7e0b0616ce17b431c18f0bb0e6cda23/packages/sitecore-jss-react/src/components/Image.tsx#L118)
