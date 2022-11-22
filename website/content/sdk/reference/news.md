---
title: news
description: OpenBB SDK Function
---

# news

Get news for a given term and source. [Source: Feedparser]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_model.py#L13)]

```python
def get_news(term: str = "", sources: str = "", sort: str = "published") -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| term | str | term to search on the news articles |  | True |
| sources | str | sources to exclusively show news from (separated by commas) |  | True |
| sort | str | the column to sort by | published | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | term to search on the news articles |
---

