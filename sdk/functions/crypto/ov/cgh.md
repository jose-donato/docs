# cgh

## crypto_ov_pycoingecko_model.get_coins

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L120)

Description: Get N coins from CoinGecko [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top coins to grab from CoinGecko | None | False |
| category | str | Category of the coins we want to retrieve | None | False |
| sortby | str | Key to sort data | None | False |
| ascend | bool | Sort data in ascending order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | N coins |

## Examples

