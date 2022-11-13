---
title: earnings
description: Get earnings calendar for ticker
---
# earnings

## stocks_fa_av_model.get_earnings

```python
def earnings(symbol: str, quarterly: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/av_model.py#L429)

Description: Get earnings calendar for ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| quarterly | bool | Flag to get quarterly and not annual, by default False | False | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of earnings |

## Examples

