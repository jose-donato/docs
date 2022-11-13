---
title: orderbook
description: Plot the orderbook for the instrument if Oanda provides one.
---
# orderbook

## forex_oanda_view.get_order_book

```python
def orderboo) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L79)

Description: Plot the orderbook for the instrument if Oanda provides one.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

