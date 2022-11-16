---
title: fr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# fr

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.messari_model.get_fundraising

```python title='openbb_terminal/cryptocurrency/due_diligence/messari_model.py'
def get_fundraising(symbol: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L637)

Description: Returns coin fundraising

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check fundraising | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[str, pd.DataFrame, pd.DataFrame, pd.DataFrame] | Launch summary,<br/>Sales rounds,<br/>Treasury Accounts,<br/>Metric Value launch details |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.messari_view.display_fundraising

```python title='openbb_terminal/cryptocurrency/due_diligence/messari_view.py'
def display_fundraising(symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L639)

Description: Display coin fundraising

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check coin fundraising | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>