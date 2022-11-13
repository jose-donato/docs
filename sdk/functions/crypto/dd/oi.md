# oi

## crypto_dd_coinglass_model.get_open_interest_per_exchange

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L148)

Description: Returns open interest by exchange for a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto Symbol to search open interest futures (e.g., BTC) | None | False |
| interval | int | Frequency (possible values are: 0 for ALL, 2 for 1H, 1 for 4H, 4 for 12H), by default 0 | 0 | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | open interest by exchange and price |

## Examples

