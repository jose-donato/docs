---
title: positionbook
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# positionbook

<Tabs>
<TabItem value="model" label="Model" default>

Request position book data for plotting.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L182)]

```python
def positionbook_plot_data_request(instrument: Optional[str] = None, accountID: str = "REPLACE_ME") -> Union[pd.DataFrame, bool]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | True |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | REPLACE_ME | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Position book data or False |
---



</TabItem>
<TabItem value="view" label="View">

Plot a position book for an instrument if Oanda provides one.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L116)]

```python
def get_position_book(accountID: str, instrument: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>