---
title: prices
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# prices

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.onchain.ethplorer_model.get_token_historical_price

```python title='openbb_terminal/cryptocurrency/onchain/ethplorer_model.py'
def get_token_historical_price(address: Any, sortby: str, ascend: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L545)

Description: Get token historical prices with volume and market cap, and average price. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token e.g. 0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in descending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with token historical prices. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.onchain.ethplorer_view.display_token_historical_prices

```python title='openbb_terminal/cryptocurrency/onchain/ethplorer_view.py'
def display_token_historical_prices(address: str, limit: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_view.py#L334)

Description: Display token historical prices with volume and market cap, and average price.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |
| limit | int | Limit of transactions. Maximum 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in descending order. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>