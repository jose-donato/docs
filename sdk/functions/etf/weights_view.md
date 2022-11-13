---
title: weights
description: Display sector weightings allocation of ETF. [Source: Yahoo Finance]
---
# weights

## etf_yfinance_view.display_etf_weightings

```python
def weights(name: str, raw: bool, min_pct_to_display: float, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_view.py#L26)

Description: Display sector weightings allocation of ETF. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |
| raw | bool | Display sector weighting allocation | None | False |
| min_pct_to_display | float | Minimum percentage to display sector | None | False |
| export | str | Type of format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

