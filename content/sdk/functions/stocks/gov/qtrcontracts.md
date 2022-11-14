---
title: qtrcontracts
description: OpenBB SDK Function
---
# qtrcontracts

## stocks_gov_quiverquant_model.get_qtr_contracts

```python
def qtrcontracts(analysis: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L481)

Description: Analyzes quarterly contracts by ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| analysis | str | How to analyze.  Either gives total amount or sorts by high/low momentum. | None | False |
| limit | int | Number to return, by default 5 | 5 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with tickers and total amount if total selected. |

## Examples




# VIEW

# qtrcontracts

## stocks_gov_quiverquant_view.display_qtr_contracts

```python
def qtrcontracts(analysis: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L445)

Description: Quarterly contracts [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| analysis | str | Analysis to perform.  Either 'total', 'upmom' 'downmom' | None | False |
| limit | int | Number to show | None | False |
| raw | bool | Flag to display raw data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

