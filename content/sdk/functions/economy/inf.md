---
title: inf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# inf

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.economy.alphavantage_model.get_inflation

```python title='openbb_terminal/economy/alphavantage_model.py'
def get_inflation(start_year: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L139)

Description: Get historical Inflation for United States from AlphaVantage

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of inflation rates |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.economy.alphavantage_view.display_inflation

```python title='openbb_terminal/economy/alphavantage_view.py'
def display_inflation(start_year: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_view.py#L202)

Description: Display US Inflation from AlphaVantage

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |
| raw | bool | Flag to show raw data, by default False | False | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>