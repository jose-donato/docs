---
title: screener_output
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# screener_output

<Tabs>
<TabItem value="model" label="Model" default>

Screen options based on preset filters

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_model.py#L159)

```python
def get_screener_output(preset: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Chosen preset | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, str] | DataFrame with screener data or empty if errors, String containing error message if supplied |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Print the output of screener

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_view.py#L60)

```python
def view_screener_output(preset: str, limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Chosen preset | None | False |
| limit | int | Number of randomly sorted rows to display | None | False |
| export | str | Format for export file | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| List | List of tickers screened |

---

## Examples

---



</TabItem>
</Tabs>