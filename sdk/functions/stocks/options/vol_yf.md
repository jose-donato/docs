---
title: vol_yf
description: OpenBB SDK Function
---
# vol_yf

## stocks_options_yfinance_model.get_vol

```python
def vol_yf(symbol: str, expiry: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L533)

Description: Plot volume

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| expiry | str | expiration date for options | None | False |

## Returns

None

## Examples




# VIEW

# vol_yf

## stocks_options_yfinance_view.plot_vol

```python
def vol_yf(symbol: str, expiry: str, min_sp: float, max_sp: float, calls_only: bool, puts_only: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L337)

Description: Plot volume

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| expiry | str | expiration date for options | None | False |
| min_sp | float | Min strike to consider | None | False |
| max_sp | float | Max strike to consider | None | False |
| calls_only | bool | Show calls only | None | False |
| puts_only | bool | Show puts only | None | False |
| export | str | Format to export file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

