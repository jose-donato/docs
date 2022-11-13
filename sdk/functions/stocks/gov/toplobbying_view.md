---
title: toplobbying
description: Top lobbying tickers based on total spent
---
# toplobbying

## stocks_gov_quiverquant_view.display_top_lobbying

```python
def toplobbying(limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L621)

Description: Top lobbying tickers based on total spent

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of tickers to show | None | False |
| raw | bool | Show raw data | None | False |
| export |  | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

