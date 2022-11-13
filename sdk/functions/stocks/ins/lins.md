---
title: lins
description: Get last insider activity for a given stock ticker. [Source: Finviz]
---
# lins

## stocks_insider_finviz_model.get_last_insider_activity

```python
def lins(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/finviz_model.py#L15)

Description: Get last insider activity for a given stock ticker. [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| pd.DataFrame | None | Latest insider trading activity | None | None |

## Returns

None

## Examples

