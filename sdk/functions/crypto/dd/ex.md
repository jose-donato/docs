# ex

## crypto_dd_coinpaprika_model.get_coin_exchanges_by_id

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L149)

Description: Get all exchanges for given coin id. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Identifier of Coin from CoinPaprika | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:
https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | All exchanges for given coin
Columns: id, name, adjusted_volume_24h_share, fiats |

## Examples

