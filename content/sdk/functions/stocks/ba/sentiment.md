---
title: sentiment
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sentiment

<Tabs>
<TabItem value="model" label="Model" default>

Get sentiments from symbol.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_model.py#L125)

```python
def get_sentiment(symbol: str, n_tweets: int, n_days_past: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get sentiment for | None | False |
| n_tweets | int | Number of tweets to get per hour | None | False |
| n_days_past | int | Number of days to extract tweets for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of sentiment |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots sentiments from symbol

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_view.py#L79)

```python
def display_sentiment(symbol: str, n_tweets: int, n_days_past: int, compare: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get sentiment for | None | False |
| n_tweets | int | Number of tweets to get per hour | None | False |
| n_days_past | int | Number of days to extract tweets for | None | False |
| compare | bool | Show corresponding change in stock price | None | False |
| export | str | Format to export tweet dataframe | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>