---
title: price
description: Request price for a forex pair.
---
# price

## forex_oanda_model.fx_price_request

```python
def price(accountID: str, instrument: Union[str, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L35)

Description: Request price for a forex pair.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[Dict[str, str], bool] | The currency pair price or False |

## Examples

