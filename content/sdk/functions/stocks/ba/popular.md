---
title: popular
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# popular

<Tabs>
<TabItem value="model" label="Model" default>

Get popular tickers from list of subreddits [Source: reddit].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L145)]

```python
def get_popular_tickers(limit: int = 10, post_limit: int = 50, subreddits: str = "") -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | 10 | True |
| post_limit | int | How many posts to analyze in each subreddit | 50 | True |
| subreddits | str | String of comma separated subreddits. |  | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top tickers from supplied subreddits |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing latest popular tickers. [Source: Reddit].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L186)]

```python
def display_popular_tickers(limit: int = 10, post_limit: int = 50, subreddits: str = "", export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | 10 | True |
| post_limit | int | How many posts to analyze in each subreddit | 50 | True |
| subreddits | str | String of comma separated subreddits. |  | True |
| export | str | Format to export dataframe |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>