---
title: bbands
description: Show bollinger bands
---
# bbands

## common_ta_volatility_view.display_bbands

```python
def bbands(data: pd.DataFrame, symbol: str, window: int, n_std: float, mamode: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L26)

Description: Show bollinger bands

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| symbol | str | Ticker symbol | None | False |
| window | int | Length of window to calculate BB | None | False |
| n_std | float | Number of standard deviations to show | None | False |
| mamode | str | Method of calculating average | None | False |
| export | str | Format of export file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

