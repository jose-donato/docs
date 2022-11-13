---
title: cr
description: Returns crypto {borrow,supply} interest rates for cryptocurrencies across several platforms
---
# cr

## crypto_ov_loanscan_model.get_rates

```python
def cr(rate_type: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/loanscan_model.py#L266)

Description: Returns crypto {borrow,supply} interest rates for cryptocurrencies across several platforms

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| rate_type | str | Interest rate type: {borrow, supply}. Default: supply | supply | False |

## Returns

| Type | Description |
| ---- | ----------- |
| crypto interest rates per platform | None |

## Examples

