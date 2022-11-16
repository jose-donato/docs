---
title: rolling
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rolling

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.quantitative_analysis.rolling_model.get_rolling_avg

```python title='openbb_terminal/common/quantitative_analysis/rolling_model.py'
def get_rolling_avg(data: pd.DataFrame, window: int) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L16)

Description: Return rolling mean and standard deviation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of target data | None | False |
| window | int | Length of rolling window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame] | Dataframe of rolling mean,<br/>Dataframe of rolling standard deviation |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.quantitative_analysis.rolling_view.display_mean_std

```python title='openbb_terminal/common/quantitative_analysis/rolling_view.py'
def display_mean_std(data: pd.DataFrame, target: str, symbol: str, window: int, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_view.py#L27)

Description: Plots mean std deviation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe | None | False |
| target | str | Column in data to look at | None | False |
| symbol | str | Stock ticker | None | False |
| window | int | Length of window | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>