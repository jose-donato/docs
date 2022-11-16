---
title: cg
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cg

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.technical_analysis.momentum_model.cg

```python title='openbb_terminal/common/technical_analysis/momentum_model.py'
def cg(values: pd.Series, window: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L189)

Description: Center of gravity

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| values | pd.DataFrame | Data to use with close being titled values | None | False |
| window | int | Length for indicator window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of technical indicator |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.technical_analysis.momentum_view.display_cg

```python title='openbb_terminal/common/technical_analysis/momentum_view.py'
def display_cg(data: pd.Series, window: int, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L499)

Description: Plots center of gravity Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of values | None | False |
| window | int | Length of window | None | False |
| symbol | str | Stock ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>