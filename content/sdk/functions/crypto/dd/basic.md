---
title: basic
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# basic

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.coinpaprika_model.basic_coin_info

```python title='openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py'
def basic_coin_info(symbol: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L410)

Description: Basic coin information [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin id | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.coinpaprika_view.display_basic

```python title='openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py'
def display_basic(symbol: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L345)

Description: Prints table showing basic information for coin. Like:

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>