---
title: contracts
description: OpenBB SDK Function
---
# contracts

## stocks_gov_quiverquant_model.get_contracts

```python
def contracts(symbol: str, past_transaction_days: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L102)

Description: Get government contracts for ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get congress trading data from | None | False |
| past_transaction_days | int | Number of days to get transactions for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most recent transactions by members of U.S. Congress |

## Examples




# VIEW

# contracts

## stocks_gov_quiverquant_view.display_contracts

```python
def contracts(symbol: str, past_transaction_days: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L379)

Description: Show government contracts for ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get congress trading data from | None | False |
| past_transaction_days | int | Number of days to get transactions for | None | False |
| raw | bool | Flag to display raw data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

