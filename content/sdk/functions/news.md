---
title: news
description: OpenBB SDK Function
---

# news

## openbb_terminal.common.feedparser_model.get_news

```python title='openbb_terminal/common/feedparser_model.py'
def get_news(term: str, sources: str, sort: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_model.py#L13)

Description: Get news for a given term and source. [Source: Feedparser]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| term | str | term to search on the news articles | None | False |
| sources | str | sources to exclusively show news from (separated by commas) | None | False |
| sort | str | the column to sort by | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | term to search on the news articles |

## Examples

