---
title: baas
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# baas

<Tabs>
<TabItem value="model" label="Model" default>

Get an average bid and ask prices, average spread for given crypto pair for chosen time period.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L725)

```python
def get_spread_for_crypto_pair(symbol: str, to_symbol: str, limit: int, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quoted currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Average bid and ask prices, spread for given crypto pair for chosen time period |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing an average bid and ask prices, average spread for given crypto pair for chosen

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_view.py#L345)

```python
def display_spread_for_crypto_pair(symbol: Any, to_symbol: Any, days: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quoted currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Average bid and ask prices, spread for given crypto pair for chosen time period |

---

## Examples

---



</TabItem>
</Tabs>