---
title: news
description: OpenBB SDK Function
---

# news

Get news for a given term and source. [Source: Feedparser]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_model.py#L13)

```python
def get_news(term: str, sources: str, sort: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| term | str | term to search on the news articles | None | False |
| sources | str | sources to exclusively show news from (separated by commas) | None | False |
| sort | str | the column to sort by | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | term to search on the news articles |

---

## Examples

---

