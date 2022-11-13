# close

## crypto_dd_glassnode_model.get_close_price

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L178)

Description: Returns the price of a cryptocurrency

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto to check close price (BTC or ETH) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| print_errors | bool | Flag to print errors. Default: True | True | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | price over time |

## Examples

