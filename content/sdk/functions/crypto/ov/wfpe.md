---
title: wfpe
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# wfpe

<Tabs>
<TabItem value="model" label="Model" default>

Scrapes coin withdrawal fees per exchange

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L207)

```python
def get_crypto_withdrawal_fees(symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to check withdrawal fees. By default bitcoin | bitcoin | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| List | - str: Overall statistics (exchanges, lowest, average and median)<br/>- pd.DataFrame: Exchange, Withdrawal Fee, Minimum Withdrawal Amount |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Coin withdrawal fees per exchange

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L86)

```python
def display_crypto_withdrawal_fees(symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to check withdrawal fees | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>