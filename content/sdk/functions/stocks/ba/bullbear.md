---
title: bullbear
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bullbear

<Tabs>
<TabItem value="model" label="Model" default>

Gets bullbear sentiment for ticker [Source: stocktwits].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L16)]

```python
def get_bullbear(symbol: str) -> Tuple[int, int, int, int]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to look at | None | False |

---
## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[int, int, int, int] | Watchlist count,<br/>Number of cases found for ticker,<br/>Number of bullish statements,<br/>Number of bearish statements, |

---


</TabItem>
<TabItem value="view" label="View">

Print bullbear sentiment based on last 30 messages on the board.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_view.py#L17)]

```python
def display_bullbear(symbol: str) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>