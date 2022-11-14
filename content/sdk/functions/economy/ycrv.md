---
title: ycrv
description: OpenBB SDK Function
---
# ycrv

## economy_investingcom_model.get_yieldcurve

```python
def ycrv(country: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/investingcom_model.py#L305)

Description: Get yield curve for specified country. [Source: Investing.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to display yield curve. List of available countries is accessible through get_ycrv_countries(). | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Country yield curve |

## Examples




# VIEW

# ycrv

## economy_investingcom_view.display_yieldcurve

```python
def ycrv(country: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType], raw: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/investingcom_view.py#L207)

Description: Display yield curve for specified country. [Source: Investing.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to display yield curve. List of available countries is accessible through get_ycrv_countries(). | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

