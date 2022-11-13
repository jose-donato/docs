---
title: messages
description: Get last messages for a given ticker [Source: stocktwits]
---
# messages

## stocks_ba_stocktwits_model.get_messages

```python
def messages(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L54)

Description: Get last messages for a given ticker [Source: stocktwits]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of messages to get | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of messages |

## Examples

