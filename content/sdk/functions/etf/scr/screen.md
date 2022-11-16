---
title: screen
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# screen

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.etf.screener.screener_model.etf_screener

```python title='openbb_terminal/etf/screener/screener_model.py'
def etf_screener(preset: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/screener/screener_model.py#L43)

Description: Screens the etfs pulled from my repo (https://github.com/jmaslek/etf_scraper),

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Screener to use from presets | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Screened dataframe |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.etf.screener.screener_view.view_screener

```python title='openbb_terminal/etf/screener/screener_view.py'
def view_screener(preset: str, num_to_show: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/screener/screener_view.py#L18)

Description: Display screener output

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Preset to use | None | False |
| num_to_show | int | Number of etfs to show | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Ascend when sorted | None | False |
| export | str | Output format of export | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>