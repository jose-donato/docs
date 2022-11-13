# exchanges

## crypto_ov_pycoingecko_model.get_exchanges

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L211)

Description: Get list of top exchanges from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Trust_Score, Id, Name, Country, Year_Established, Trade_Volume_24h_BTC, Url |

## Examples

