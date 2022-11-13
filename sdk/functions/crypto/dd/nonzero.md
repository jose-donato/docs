# nonzero

## crypto_dd_glassnode_model.get_non_zero_addresses

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L251)

Description: Returns addresses with non-zero balance of a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search (e.g., BTC) | None | False |
| start_date | int | Initial date timestamp (e.g., 1_577_836_800) | None | False |
| end_date | int | End date timestamp (e.g., 1_609_459_200) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | addresses with non-zero balances |

## Examples

