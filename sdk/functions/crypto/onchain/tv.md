# tv

## crypto_onchain_bitquery_model.get_token_volume_on_dexes

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L512)

Description: Get token volume on different Decentralized Exchanges. [Source: https://graphql.bitquery.io/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ERC20 token symbol. | None | False |
| trade_amount_currency | str | Currency to display trade amount in. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Token volume on Decentralized Exchanges |

## Examples

