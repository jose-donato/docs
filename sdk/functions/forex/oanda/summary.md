---
title: summary
description: OpenBB SDK Function
---
# summary

## forex_oanda_model.account_summary_request

```python
def summary(accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L73)

Description: Request Oanda account summary.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Account summary data or False |

## Examples




# VIEW

# summary

## forex_oanda_view.get_account_summary

```python
def summar) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L62)

Description: Print Oanda account summary.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

None

## Examples

