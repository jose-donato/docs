---
title: messages
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# messages

<Tabs>
<TabItem value="model" label="Model" default>

Get last messages for a given ticker [Source: stocktwits].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L52)

```python
def get_messages(symbol: str, limit: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of messages to get | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of messages |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints up to 30 of the last messages on the board. [Source: Stocktwits].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_view.py#L38)

```python
def display_messages(symbol: str, limit: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of messages to get | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>