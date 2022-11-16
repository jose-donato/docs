---
title: price
description: OpenBB SDK Function
---

# price

## openbb_terminal.cryptocurrency.pyth_model.get_price

```python title='openbb_terminal/cryptocurrency/pyth_model.py'
def get_price(symbol: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/pyth_model.py#L78)

Description: Returns price and confidence interval from pyth live feed. [Source: Pyth]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol of the asset to get price and confidence interval from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[float, float, float] | Price of the asset,<br/>Confidence level,<br/>Previous price of the asset |

## Examples

