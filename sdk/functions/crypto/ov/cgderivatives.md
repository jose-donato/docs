# cgderivatives

## crypto_ov_pycoingecko_model.get_derivatives

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L340)

Description: Get list of crypto derivatives from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Rank, Market, Symbol, Price, Pct_Change_24h, Contract_Type, Basis, Spread,
Funding_Rate, Volume_24h, |

## Examples

