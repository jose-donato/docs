# cpinfo

## crypto_ov_coinpaprika_model.get_coins_info

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L200)

Description: Returns basic coin information for all coins from CoinPaprika API [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | str | Comma separated quotes to return e.g quotes=USD,BTC | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | rank, name, symbol, price, volume_24h, circulating_supply, total_supply,
max_supply, market_cap, beta_value, ath_price, |

## Examples

