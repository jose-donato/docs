---
title: atr
description: OpenBB SDK Function
---
# atr

## common_ta_volatility_model.atr

```python
def atr(data: pd.DataFrame, window: int, mamode: str, offset: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L131)

Description: Average True Range

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| window | int | Length of window | None | False |
| mamode | str | Type of filter | None | False |
| offset | int | Offset value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of atr |

## Examples




# VIEW

# atr

## common_ta_volatility_view.display_atr

```python
def atr(data: pd.DataFrame, symbol: str, window: int, mamode: str, offset: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L288)

Description: Show ATR

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| symbol | str | Ticker symbol | None | False |
| window | int | Length of window to calculate upper channel | None | False |
| export | str | Format of export file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

