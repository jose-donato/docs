---
title: close
description: Close a trade.
---
# close

## forex_oanda_view.close_trade

```python
def clos) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L279)

Description: Close a trade.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| orderID | str | ID of the order to close | None | False |
| units | Union[int, None] | Number of units to close. If empty default to all. | to | False |

## Returns

None

## Examples

