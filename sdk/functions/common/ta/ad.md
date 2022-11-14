---
title: ad
description: OpenBB SDK Function
---
# ad

## common_ta_volume_model.ad

```python
def ad(data: pd.DataFrame, use_open: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_model.py#L16)

Description: Calculate AD technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of prices with OHLC and Volume | None | False |
| use_open | bool | Whether to use open prices | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with technical indicator |

## Examples




# VIEW

# ad

## common_ta_volume_view.display_ad

```python
def ad(data: pd.DataFrame, use_open: bool, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_view.py#L27)

Description: Plot AD technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| use_open | bool | Whether to use open prices in calculation | None | False |
| symbol | str | Ticker symbol | None | False |
| export | str | Format to export data as | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

