# qtrcontracts

## stocks_gov_quiverquant_model.get_qtr_contracts

```python
def get_stars_history(repo: str):
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

