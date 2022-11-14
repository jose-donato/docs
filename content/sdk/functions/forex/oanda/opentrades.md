---
title: opentrades
description: OpenBB SDK Function
---
# opentrades

## forex_oanda_model.open_trades_request

```python
def opentrades(accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L469)

Description: Request open trades data.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Open trades data or False |

## Examples




# VIEW

# opentrades

## forex_oanda_view.get_open_trades

```python
def opentrade) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L259)

Description: View open trades.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

None

## Examples

