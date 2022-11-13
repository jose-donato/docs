# dex_trades_monthly

## crypto_onchain_bitquery_model.get_dex_trades_monthly

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L332)

Description: Get list of trades on Decentralized Exchanges monthly aggregated.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| trade_amount_currency | str | Currency of displayed trade amount. Default: USD | USD | False |
| limit | int | Last n days to query data. Maximum 365 (bigger numbers can cause timeouts
on server side) | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trades on Decentralized Exchanges monthly aggregated |

## Examples

