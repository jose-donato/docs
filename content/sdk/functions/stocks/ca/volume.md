---
title: volume
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# volume

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.comparison_analysis.yahoo_finance_model.get_volume

```python title='openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py'
def get_volume(similar: List[str], start_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py#L134)

Description: Get stock volume. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 1 year back | 1 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with volume for stock |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.comparison_analysis.yahoo_finance_view.display_volume

```python title='openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py'
def display_volume(similar: List[str], start_date: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py#L109)

Description: Display stock volume. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 1 year back | 1 | True |
| export | str | Format to export historical prices, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>