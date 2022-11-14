---
title: curve
description: OpenBB SDK Function
---
# curve

## futures_yfinance_model.get_curve_futures

```python
def curve(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_model.py#L117)

Description: Get curve futures [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | symbol to get forward curve | None | False |

## Returns

None

## Examples




# VIEW

# curve

## futures_yfinance_view.display_curve

```python
def curve(symbol: str, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_view.py#L227)

Description: Display curve futures [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Curve future symbol to display | None | False |
| raw | bool | Display futures timeseries in raw format | None | False |
| export | str | Type of format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

