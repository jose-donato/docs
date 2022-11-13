---
title: pt
description: Get analysts' price targets for a given stock. [Source: Business Insider]
---
# pt

## stocks_dd_business_insider_model.get_price_target_from_analysts

```python
def pt(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_model.py#L19)

Description: Get analysts' price targets for a given stock. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Analysts data |

## Examples

