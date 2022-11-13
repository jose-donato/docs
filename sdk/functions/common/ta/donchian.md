---
title: donchian
description: OpenBB SDK Function
---
# donchian

## common_ta_volatility_model.donchian

```python
def donchian(data: pd.DataFrame, upper_length: int, lower_length: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L52)

Description: Calculate Donchian Channels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| upper_length | int | Length of window to calculate upper channel | None | False |
| lower_length | int | Length of window to calculate lower channel | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of upper and lower channels |

## Examples




# VIEW

# donchian

## common_ta_volatility_view.display_donchian

```python
def donchian(data: pd.DataFrame, symbol: str, upper_length: int, lower_length: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L111)

Description: Show donchian channels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| symbol | str | Ticker symbol | None | False |
| upper_length | int | Length of window to calculate upper channel | None | False |
| lower_length | int | Length of window to calculate lower channel | None | False |
| export | str | Format of export file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples
