---
title: news
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# news

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.newsapi_model.get_news

```python title='openbb_terminal/common/newsapi_model.py'
def get_news(query: str, limit: int, start_date: str, show_newest: bool, sources: str) -> List
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/newsapi_model.py#L18)

Description: Get news for a given term. [Source: NewsAPI]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | term to search on the news articles | None | False |
| start_date | str | date to start searching articles from formatted YYYY-MM-DD | None | False |
| show_newest | bool | flag to show newest articles first | None | False |
| sources | str | sources to exclusively show news from (comma separated) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[Tuple[pd.DataFrame, dict]] | List of tuples containing news df in first index,<br/>dict containing title of news df. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.newsapi_view.display_news

```python title='openbb_terminal/common/newsapi_view.py'
def display_news(query: str, limit: int, start_date: str, show_newest: bool, sources: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/newsapi_view.py#L19)

Description: Prints table showing news for a given term. [Source: NewsAPI]

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

This function does not return anything

## Examples



</TabItem>
</Tabs>