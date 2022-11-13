# whales

## crypto_onchain_whale_alert_model.get_whales_transactions

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/whale_alert_model.py#L85)

Description: Whale Alert's API allows you to retrieve live and historical transaction data from major blockchains.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| min_value | int | Minimum value of trade to track. | None | False |
| limit | int | Limit of transactions. Max 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in ascending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Crypto wales transactions |

## Examples

