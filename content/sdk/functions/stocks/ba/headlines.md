---
title: headlines
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# headlines

<Tabs>
<TabItem value="model" label="Model" default>

Gets Sentiment analysis provided by FinBrain's API [Source: finbrain].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_model.py#L15)

```python
def get_sentiment(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Empty if there was an issue with data retrieval |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots Sentiment analysis from FinBrain. Prints table if raw is True. [Source: FinBrain]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_view.py#L36)

```python
def display_sentiment_analysis(symbol: str, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |
| raw | False | Display raw table data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>