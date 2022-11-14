---
title: vsurf
description: OpenBB SDK Function
---
# vsurf

## stocks_options_yfinance_model.get_iv_surface

```python
def vsurf(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L320)

Description: Gets IV surface for calls and puts for ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of DTE, Strike and IV |

## Examples




# VIEW

# vsurf

## stocks_options_yfinance_view.display_vol_surface

```python
def vsurf(symbol: str, export: str, z: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L1127)

Description: Display vol surface

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get surface for | None | False |
| export | str | Format to export data | None | False |
| z | str | The variable for the Z axis | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | False |

## Returns

None

## Examples

