---
title: cmctop
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cmctop

<Tabs>
<TabItem value="model" label="Model" default>

Shows top n coins. [Source: CoinMarketCap]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinmarketcap_model.py#L27)]

```python
def get_cmc_top_n(sortby: str = "CMC_Rank", ascend: bool = True) -> pd.DataFrame
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>Coin Market Cap:s API documentation, see:<br/>https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest | CMC_Rank | True |
| ascend | bool | Whether to sort ascending or descending | True | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top coin on CoinMarketCap |

---


</TabItem>
<TabItem value="view" label="View">

Prints table showing top n coins. [Source: CoinMarketCap]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinmarketcap_view.py#L17)]

```python
def display_cmc_top_coins(limit: int = 15, sortby: str = "CMC_Rank", ascend: bool = True, export: str = "") -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | 15 | True |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>Coin Market Cap:s API documentation, see:<br/>https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest | CMC_Rank | True |
| ascend | bool | Flag to sort data ascending | True | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>