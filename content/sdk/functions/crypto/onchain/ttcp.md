---
title: ttcp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ttcp

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.onchain.bitquery_model.get_most_traded_pairs

```python title='openbb_terminal/cryptocurrency/onchain/bitquery_model.py'
def get_most_traded_pairs(network: str, exchange: str, limit: int, sortby: str, ascend: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L658)

Description: Get most traded crypto pairs on given decentralized exchange in chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| network | str | EVM network. One from list: bsc (binance smart chain), ethereum or matic | None | False |
| exchange | st | Decentralized exchange name | None | False |
| limit | int | Number of days taken into calculation account. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most traded crypto pairs on given decentralized exchange in chosen time period. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.onchain.bitquery_view.display_most_traded_pairs

```python title='openbb_terminal/cryptocurrency/onchain/bitquery_view.py'
def display_most_traded_pairs(exchange: Any, days: int, limit: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_view.py#L286)

Description: Prints table showing most traded crypto pairs on given decentralized exchange in chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange |  | Decentralized exchange name | None | False |
| days |  | Number of days taken into calculation account. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most traded crypto pairs on given decentralized exchange in chosen time period. |

## Examples



</TabItem>
</Tabs>