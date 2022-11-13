# eb

## crypto_dd_glassnode_model.get_exchange_balances

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L437)

Description: Returns the total amount of coins held on exchange addresses in units and percentage.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (e.g., binance) | None | False |
| start_date | int | Initial date timestamp (e.g., 1_614_556_800) | None | False |
| end_date | int | End date timestamp (e.g., 1_614_556_800) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | total amount of coins in units/percentage and symbol price over time |

## Examples

