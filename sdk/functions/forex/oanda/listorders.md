# listorders

## forex_oanda_model.order_history_request

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L224)

Description: Request the orders list from Oanda.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | None | False |
| order_count | int | Limit the number of orders to retrieve | None | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

None

## Examples

