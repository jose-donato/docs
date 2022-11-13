---
title: news
description: Display news for a given term. [Source: NewsAPI]
---
# news

## common_newsapi_view.display_news

```python
def new) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L19)

Description: Display news for a given term. [Source: NewsAPI]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | term to search on the news articles | None | False |
| start_date | str | date to start searching articles from formatted YYYY-MM-DD | None | False |
| limit | int | number of articles to display | None | False |
| show_newest | bool | flag to show newest articles first | None | False |
| sources | str | sources to exclusively show news from | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

