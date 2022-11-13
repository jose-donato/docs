---
title: holdings
description: OpenBB SDK Function
---
# holdings

## etf_stockanalysis_model.get_etf_holdings

```python
def holdings(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L83)

Description: Get ETF holdings

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get holdings for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of holdings |

## Examples




# VIEW

# holdings

## etf_stockanalysis_view.view_holdings

```python
def holdings(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_view.py#L44)

Description: None

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ETF symbol to show holdings for | None | False |
| limit | int | Number of holdings to show | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

