# baas

## crypto_onchain_bitquery_model.get_spread_for_crypto_pair

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L723)

Description: Get an average bid and ask prices, average spread for given crypto pair for chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quoted currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Average bid and ask prices, spread for given crypto pair for chosen time period |

## Examples

