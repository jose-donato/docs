---
title: infer
description: Infer sentiment from past n tweets
---
# infer

## stocks_ba_twitter_view.display_inference

```python
def infer(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_view.py#L28)

Description: Infer sentiment from past n tweets

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of tweets to analyze | None | False |
| export | str | Format to export tweet dataframe | None | False |

## Returns

None

## Examples

