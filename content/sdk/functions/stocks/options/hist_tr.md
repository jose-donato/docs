---
title: hist_tr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# hist_tr

<Tabs>
<TabItem value="model" label="Model" default>

Gets historical option pricing.  This inputs either ticker, expiration, strike or the OCC chain ID and processes

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/tradier_model.py#L44)]

```python
def get_historical_options(symbol: str, expiry: str, strike: float = 0, put: bool = False, chain_id: Optional[str] = None) -> pd.DataFrame
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration date | None | False |
| strike | int | Option strike price | 0 | True |
| put | bool | Is this a put option? | False | True |
| chain_id | Optional[str] | OCC chain ID | None | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical option prices |

---


</TabItem>
<TabItem value="view" label="View">

Plot historical option prices

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/tradier_view.py#L627)]

```python
def display_historical(symbol: str, expiry: str, strike: float = 0, put: bool = False, raw: bool = False, chain_id: str = None, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Expiry date of option | None | False |
| strike | float | Option strike price | 0 | True |
| put | bool | Is this a put option? | False | True |
| raw | bool | Print raw data | False | True |
| chain_id | str | OCC option symbol | None | True |
| export | str | Format of export file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>