---
title: text_sent
description: OpenBB SDK Function
---

# text_sent

## openbb_terminal.common.behavioural_analysis.reddit_model.get_sentiment

```python title='openbb_terminal/common/behavioural_analysis/reddit_model.py'
def get_sentiment(post_data: List[str]) -> float
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L1049)

Description: Find the sentiment of a post and related comments.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| post_data | list[str] | A post and its comments in string form | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | A number in the range [-1, 1] representing sentiment |

## Examples

