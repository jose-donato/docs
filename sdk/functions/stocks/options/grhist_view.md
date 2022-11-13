---
title: grhist
description: Plots historical greeks for a given option. [Source: Syncretism]
---
# grhist

## stocks_options_screen_syncretism_view.view_historical_greeks

```python
def grhist(symbol: str, expiry: str, strike: Union[float, str], greek: str, chain_id: str, put: bool, raw: bool, limit: Union[int, str], export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_view.py#L105)

Description: Plots historical greeks for a given option. [Source: Syncretism]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| expiry | str | Expiration date | None | False |
| strike | Union[str, float] | Strike price to consider | None | False |
| greek | str | Greek variable to plot | None | False |
| chain_id | str | OCC option chain.  Overwrites other variables | None | False |
| put | bool | Is this a put option? | None | False |
| raw | bool | Print to console | None | False |
| limit | int | Number of rows to show in raw | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

