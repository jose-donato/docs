---
title: news
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# news

<Tabs>
<TabItem value="model" label="Model" default>

Get recent posts from CryptoPanic news aggregator platform. [Source: https://cryptopanic.com/]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_model.py#L158)

```python
def get_news(limit: int, post_kind: str, filter_: Optional[str], region: str, source: Optional[str], symbol: Optional[str], sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to fetch | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),<br/>es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | bool | Sort in ascend order. | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from different sources filtered by provided parameters. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display recent posts from CryptoPanic news aggregator platform.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_view.py#L17)

```python
def display_news(post_kind: str, region: str, filter_: Optional[str], limit: int, sortby: str, ascend: bool, links: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to display | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),<br/>es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | bool | Sort in ascending order. | None | False |
| links | bool | Show urls for news | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>