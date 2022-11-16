---
title: wsb
description: OpenBB SDK Function
---

# wsb

## openbb_terminal.common.behavioural_analysis.reddit_model.get_wsb_community

```python title='openbb_terminal/common/behavioural_analysis/reddit_model.py'
def get_wsb_community(limit: int, new: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L602)

Description: Get wsb posts [Source: reddit].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of posts to get, by default 10 | 10 | True |
| new | bool | Flag to sort by new instead of hot, by default False | False | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of reddit submissions |

## Examples

