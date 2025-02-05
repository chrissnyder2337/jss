[**@sitecore-jss/sitecore-jss-react-forms**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react-forms](../README.md) / FieldProps

# Interface: FieldProps\<TFormField\>

## Extended by

- [`FieldWithValueProps`](FieldWithValueProps.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TFormField` *extends* `FormField` | `FormField` |

## Properties

### field

> **field**: `TFormField`

Form field schema data

#### Defined in

[src/FieldProps.ts:12](https://github.com/Sitecore/jss/blob/f0f6e64d75797af01d12051025c04b2b5c3ecf36/packages/sitecore-jss-react-forms/src/FieldProps.ts#L12)

***

### fieldFactory()

> **fieldFactory**: (`field`) => `ReactNode`

Function that can be called to create child form field components (used for sections)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | `FormField`\<`ViewModel`\> |

#### Returns

`ReactNode`

#### Defined in

[src/FieldProps.ts:14](https://github.com/Sitecore/jss/blob/f0f6e64d75797af01d12051025c04b2b5c3ecf36/packages/sitecore-jss-react-forms/src/FieldProps.ts#L14)

***

### key?

> `optional` **key**: `string`

#### Defined in

[src/FieldProps.ts:18](https://github.com/Sitecore/jss/blob/f0f6e64d75797af01d12051025c04b2b5c3ecf36/packages/sitecore-jss-react-forms/src/FieldProps.ts#L18)

***

### onButtonClick()

> **onButtonClick**: (`buttonFieldName`) => `void`

Callback for when a submit button is clicked. Tells the parent form which button was clicked when a submit occurs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `buttonFieldName` | `string` |

#### Returns

`void`

#### Defined in

[src/FieldProps.ts:16](https://github.com/Sitecore/jss/blob/f0f6e64d75797af01d12051025c04b2b5c3ecf36/packages/sitecore-jss-react-forms/src/FieldProps.ts#L16)
