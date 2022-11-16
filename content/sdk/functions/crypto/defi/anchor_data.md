---
title: anchor_data
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# anchor_data

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.defi.cryptosaurio_model.get_anchor_data

```python title='openbb_terminal/cryptocurrency/defi/cryptosaurio_model.py'
def get_anchor_data(address: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/cryptosaurio_model.py#L17)

Description: Returns anchor protocol earnings data of a certain terra address

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Terra address. Valid terra addresses start with 'terra' | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame, str] | - pd.DataFrame: Earnings over time in UST<br/>- pd.DataFrame: History of transactions<br/>- str:              Overall statistics |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.defi.cryptosaurio_view.display_anchor_data

```python title='openbb_terminal/cryptocurrency/defi/cryptosaurio_view.py'
def display_anchor_data(address: str, export: str, show_transactions: bool, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/cryptosaurio_view.py#L25)

Description: Plots anchor protocol earnings data of a certain terra address

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| asset | str | Terra asset {ust,luna,sdt} | None | False |
| address | str | Terra address. Valid terra addresses start with 'terra' | None | False |
| show_transactions | bool | Flag to show history of transactions in Anchor protocol for address. Default False | False | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>