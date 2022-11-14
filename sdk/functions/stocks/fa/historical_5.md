---
title: historical_5
description: OpenBB SDK Function
---
# historical_5

## stocks_fa_dcf_model.get_historical_5

```python
def historical_5(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/dcf_model.py#L277)

Description: Get 5 year monthly historical performance for a ticker with dividends filtered

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol to be analyzed | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Historical data |

## Examples

