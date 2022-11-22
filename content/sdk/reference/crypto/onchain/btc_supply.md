---
title: btc_supply
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# btc_supply

<Tabs>
<TabItem value="model" label="Model" default>

Returns BTC circulating supply [Source: https://api.blockchain.info/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/blockchain_model.py#L43)]

```python
openbb.crypto.onchain.btc_supply()
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | BTC circulating supply |
---



</TabItem>
<TabItem value="view" label="Chart">

Returns BTC circulating supply [Source: https://api.blockchain.info/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/blockchain_view.py#L28)]

```python
openbb.crypto.onchain.btc_supply_chart(start_date: str = "2010-01-01", end_date: str = None, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | 2010-01-01 | True |
| end_date | str | Final date, format YYYY-MM-DD | None | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>