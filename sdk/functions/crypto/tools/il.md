# il

## crypto_tools_model.calculate_il

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_model.py#L56)

Description: Calculates Impermanent Loss in a custom liquidity pool

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| price_changeA | float | price change of crypto A in percentage | None | False |
| price_changeB | float | price change of crypto B in percentage | None | False |
| proportion | float | percentage of first token in pool | None | False |
| initial_pool_value | float | initial value that pool contains | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | - pd.DataFrame: dataframe with results
- str: narrative version of results |

## Examples

