---
title: positionbook
description: Plot a position book for an instrument if Oanda provides one.
---
# positionbook

## forex_oanda_view.get_position_book

```python
def positionboo) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L117)

Description: Plot a position book for an instrument if Oanda provides one.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

