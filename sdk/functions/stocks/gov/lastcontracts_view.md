---
title: lastcontracts
description: Last government contracts [Source: quiverquant.com]
---
# lastcontracts

## stocks_gov_quiverquant_view.display_last_contracts

```python
def lastcontracts(past_transaction_days: int, limit: int, sum_contracts: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L224)

Description: Last government contracts [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| past_transaction_days | int | Number of days to look back | None | False |
| limit | int | Number of contracts to show | None | False |
| sum_contracts | bool | Flag to show total amount of contracts given out. | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

