---
title: view
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# view

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.technical_analysis.finviz_model.get_finviz_image

```python title='openbb_terminal/stocks/technical_analysis/finviz_model.py'
def get_finviz_image(symbol: str) -> bytes
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finviz_model.py#L16)

Description: Get finviz image for given ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| bytes | Image in byte format |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.technical_analysis.finviz_view.view

```python title='openbb_terminal/stocks/technical_analysis/finviz_view.py'
def view(symbol: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finviz_view.py#L22)

Description: View finviz image for ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>