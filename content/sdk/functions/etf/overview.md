---
title: overview
description: OpenBB SDK Function
---
# overview

## etf_stockanalysis_model.get_etf_overview

```python
def overview(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L49)

Description: Get overview data for selected etf

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| etf_symbol | str | Etf symbol to get overview for | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| df | pd.DataFrame | Dataframe of stock overview data | None | False |

## Returns

None

## Examples




# VIEW

# overview

## etf_stockanalysis_view.view_overview

```python
def overview(symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_view.py#L16)

Description: Print etf overview information

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ETF symbols to display overview for | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

