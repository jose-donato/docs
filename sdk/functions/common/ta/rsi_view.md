---
title: rsi
description: Display RSI Indicator
---
# rsi

## common_ta_momentum_view.display_rsi

```python
def rsi(data: pd.Series, window: int, scalar: float, drift: int, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L218)

Description: Display RSI Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Values to input | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar variable | None | False |
| drift | int | Drift variable | None | False |
| symbol | str | Stock ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

