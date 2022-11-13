# book

## crypto_dd_binance_model.get_order_book

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L138)

Description: Get order book for currency. [Source: Binance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol | None | False |
| limit | int | Limit parameter. Adjusts the weight | None | False |
| to_symbol | str | Quote currency (what to view coin vs) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing orderbook |

## Examples

