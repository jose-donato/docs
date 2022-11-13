# cgstables

## crypto_ov_pycoingecko_model.get_stable_coins

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L184)

Description: Returns top stable coins [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | How many rows to show | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Rank, Name, Symbol, Price, Change_24h, Exchanges, Market_Cap, Change_30d, Url |

## Examples

