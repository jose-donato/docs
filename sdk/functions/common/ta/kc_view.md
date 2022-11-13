---
title: kc
description: View Keltner Channels Indicator
---
# kc

## common_ta_volatility_view.view_kc

```python
def kc(data: pd.DataFrame, window: int, scalar: float, mamode: str, offset: int, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_view.py#L193)

Description: View Keltner Channels Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar value | None | False |
| mamode | str | Type of filter | None | False |
| offset | int | Offset value | None | False |
| symbol | str | Ticker symbol | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

