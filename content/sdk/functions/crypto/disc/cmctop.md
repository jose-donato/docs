---
title: cmctop
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cmctop

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.discovery.coinmarketcap_model.get_cmc_top_n

```python title='openbb_terminal/cryptocurrency/discovery/coinmarketcap_model.py'
def get_cmc_top_n(sortby: str, ascend: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinmarketcap_model.py#L27)

Description: Shows top n coins. [Source: CoinMarketCap]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>Coin Market Cap:s API documentation, see:<br/>https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest | None | False |
| ascend | bool | Whether to sort ascending or descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top coin on CoinMarketCap |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.discovery.coinmarketcap_view.display_cmc_top_coins

```python title='openbb_terminal/cryptocurrency/discovery/coinmarketcap_view.py'
def display_cmc_top_coins(limit: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinmarketcap_view.py#L17)

Description: Prints table showing top n coins. [Source: CoinMarketCap]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>Coin Market Cap:s API documentation, see:<br/>https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>