---
title: fisher
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# fisher

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.technical_analysis.momentum_model.fisher

```python title='openbb_terminal/common/technical_analysis/momentum_model.py'
def fisher(data: pd.DataFrame, window: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L165)

Description: Fisher Transform

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| window | int | Length for indicator window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of technical indicator |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.technical_analysis.momentum_view.display_fisher

```python title='openbb_terminal/common/technical_analysis/momentum_view.py'
def display_fisher(data: pd.DataFrame, window: int, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L406)

Description: Plots Fisher Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| window | int | Length of window | None | False |
| symbol | str | Ticker string | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>