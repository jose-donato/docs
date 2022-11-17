---
title: cpexchanges
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpexchanges

<Tabs>
<TabItem value="model" label="Model" default>

List exchanges from CoinPaprika API [Source: CoinPaprika]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L265)]

```python
def get_list_of_exchanges(symbols: str = "USD", sortby: str = "rank", ascend: bool = True) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | str | Comma separated quotes to return e.g quotes=USD,BTC | USD | True |
| sortby | str | Key by which to sort data | rank | True |
| ascend | bool | Flag to sort data ascend | True | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | rank, name, currencies, markets, fiats, confidence_score, reported_volume_24h,<br/>reported_volume_7d ,reported_volume_30d, sessions_per_month, |



</TabItem>
<TabItem value="view" label="View">

List exchanges from CoinPaprika API. [Source: CoinPaprika]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L213)]

```python
def display_all_exchanges(symbol: str, sortby: str = "rank", ascend: bool = True, limit: int = 15, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| currency | str | Quoted currency | None | True |
| limit | int | Number of records to display | 15 | True |
| sortby | str | Key by which to sort data | rank | True |
| ascend | bool | Flag to sort data ascending | True | True |
| links | bool | Flag to display urls | None | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>