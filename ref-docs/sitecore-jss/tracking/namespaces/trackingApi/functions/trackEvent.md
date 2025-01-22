[**@sitecore-jss/sitecore-jss**](../../../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../../../README.md) / [tracking](../../../README.md) / [trackingApi](../README.md) / trackEvent

# Function: trackEvent()

> **trackEvent**(`events`, `options`): `Promise`\<`void`\>

Makes a request to Sitecore Layout Service for the specified route item path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `events` | ([`CampaignInstance`](../../../interfaces/CampaignInstance.md) \| [`GoalInstance`](../../../interfaces/GoalInstance.md) \| [`EventInstance`](../../../interfaces/EventInstance.md) \| [`OutcomeInstance`](../../../interfaces/OutcomeInstance.md) \| [`PageViewInstance`](../../../interfaces/PageViewInstance.md))[] | events to send |
| `options` | [`TrackingRequestOptions`](../../../interfaces/TrackingRequestOptions.md) | options for the tracking service |

## Returns

`Promise`\<`void`\>

void

## Defined in

[packages/sitecore-jss/src/tracking/trackingApi.ts:62](https://github.com/Sitecore/jss/blob/fe1d78ae02ea5d97f1dff80e45e93416079d4dc7/packages/sitecore-jss/src/tracking/trackingApi.ts#L62)
