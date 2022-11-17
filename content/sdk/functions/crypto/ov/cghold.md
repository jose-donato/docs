---
title: cghold
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cghold

<Tabs>
<TabItem value="model" label="Model" default>

Returns public companies that holds ethereum or bitcoin [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L102)]

```python
def get_holdings_overview(endpoint: str = "bitcoin") -> List
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| endpoint | str | "bitcoin" or "ethereum" | bitcoin | True |

## Returns

| Type | Description |
| ---- | ----------- |
| List[Union[str, pd.DataFrame]] | - str:              Overall statistics<br/>- pd.DataFrame: Companies holding crypto |



</TabItem>
<TabItem value="view" label="View">

Shows overview of public companies that holds ethereum or bitcoin. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L135)]

```python
def display_holdings_overview(symbol: str, show_bar: bool = False, export: str = "", limit: int = 15) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency: ethereum or bitcoin | None | False |
| show_bar | bool | Whether to show a bar graph for the data | False | True |
| export | str | Export dataframe data to csv,json,xlsx |  | True |
| limit | int | The number of rows to show | 15 | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>