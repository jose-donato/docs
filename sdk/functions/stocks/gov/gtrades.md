# gtrades

## stocks_gov_quiverquant_model.get_cleaned_government_trading

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L416)

Description: Government trading for specific ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get congress trading data from | None | False |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get transactions for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of tickers government trading |

## Examples

