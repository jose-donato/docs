---
title: snews
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# snews

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.behavioural_analysis.finnhub_model.get_headlines_sentiment

```python title='openbb_terminal/stocks/behavioural_analysis/finnhub_model.py'
def get_headlines_sentiment(symbol: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_model.py#L97)

Description: Get headlines sentiment using VADER model over time. [Source: Finnhub]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker of company | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.behavioural_analysis.finnhub_view.display_stock_price_headlines_sentiment

```python title='openbb_terminal/stocks/behavioural_analysis/finnhub_view.py'
def display_stock_price_headlines_sentiment(symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_view.py#L27)

Description: Display stock price and headlines sentiment using VADER model over time. [Source: Finnhub]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker of company | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>