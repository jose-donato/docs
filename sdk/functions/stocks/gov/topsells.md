# topsells

## stocks_gov_quiverquant_model.get_government_sells

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L286)

Description: Get top sell government trading [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get trading for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top government sell trading |

## Examples

