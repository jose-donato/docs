# change

## crypto_dd_glassnode_model.get_exchange_net_position_change

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L517)

Description: Returns 30d change of the supply held in exchange wallets of a certain symbol.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset symbol to search supply (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (e.g., binance) | None | False |
| start_date | int | Initial date timestamp (e.g., 1_614_556_800) | None | False |
| end_date | int | End date timestamp (e.g., 1_614_556_800) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | supply change in exchange wallets of a certain symbol over time |

## Examples

