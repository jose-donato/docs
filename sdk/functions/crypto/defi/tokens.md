# tokens

## crypto_defi_graph_model.get_uni_tokens

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L80)

Description: Get list of tokens trade-able on Uniswap DEX. [Source: https://thegraph.com/en/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| skip | int | Skip n number of records. | None | False |
| limit | int | Show n number of records. | None | False |
| sortby | str | The column to sort by | None | False |
| ascend | bool | Whether to sort in ascending order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Uniswap tokens with trading volume, transaction count, liquidity. |

## Examples

