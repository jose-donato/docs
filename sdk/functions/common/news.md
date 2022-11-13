---
title: news
description: OpenBB SDK Function
---
# news

## common_feedparser_model.get_news

```python
def news(term: str, sources: str, sort: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_model.py#L13)

Description: Get news for a given term and source. [Source: Feedparser]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| term | str | term to search on the news articles | None | False |
| sources | str | sources to exclusively show news from (separated by commas) | None | False |
| sort | str | the column to sort by | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| articles | dict | term to search on the news articles | None | False |

## Returns

None

## Examples




# VIEW

# news

## common_feedparser_view.display_news

```python
def news(term: str, sources: str, limit: int, export: str, sort: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_view.py#L15)

Description: Display news for a given term and source. [Source: Feedparser]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| term | str | term to search on the news articles | None | False |
| sources | str | sources to exclusively show news from | None | False |
| limit | int | number of articles to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| sort | str | the column to sort by | None | False |

## Returns

None

## Examples

