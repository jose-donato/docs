---
title: topbuys
description: Top buy government trading [Source: quiverquant.com]
---
# topbuys

## stocks_gov_quiverquant_view.display_government_buys

```python
def topbuys(gov_type: str, past_transactions_months: int, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L78)

Description: Top buy government trading [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get trading for | None | False |
| limit | int | Number of tickers to show | None | False |
| raw | bool | Display raw data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

