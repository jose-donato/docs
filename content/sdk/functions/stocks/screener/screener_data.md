---
title: screener_data
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# screener_data

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.screener.finviz_model.get_screener_data

```python title='openbb_terminal/stocks/screener/finviz_model.py'
def get_screener_data(preset_loaded: str, data_type: str, limit: int, ascend: bool) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/finviz_model.py#L76)

Description: Screener Overview

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset_loaded | str | Loaded preset filter | None | False |
| data_type | str | Data type between: overview, valuation, financial, ownership, performance, technical | None | False |
| limit | int | Limit of stocks filtered with presets to print | None | False |
| ascend | bool | Ascended order of stocks filtered to print | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with loaded filtered stocks |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.screener.finviz_view.screener

```python title='openbb_terminal/stocks/screener/finviz_view.py'
def screener(loaded_preset: str, data_type: str, limit: int, ascend: bool, sortby: str, export: str) -> List
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/finviz_view.py#L127)

Description: Screener one of the following: overview, valuation, financial, ownership, performance, technical.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| loaded_preset | str | Preset loaded to filter for tickers | None | False |
| data_type | str | Data type string between: overview, valuation, financial, ownership, performance, technical | None | False |
| limit | int | Limit of stocks to display | None | False |
| ascend | bool | Order of table to ascend or descend | None | False |
| sortby | str | Column to sort table by | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[str] | List of stocks that meet preset criteria |

## Examples



</TabItem>
</Tabs>