---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.technical_analysis.finbrain_model.get_technical_summary_report

```python title='openbb_terminal/stocks/technical_analysis/finbrain_model.py'
def get_technical_summary_report(symbol: str) -> str
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finbrain_model.py#L15)

Description: Get technical summary report provided by FinBrain's API

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the technical summary | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| str | technical summary report |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.technical_analysis.finbrain_view.technical_summary_report

```python title='openbb_terminal/stocks/technical_analysis/finbrain_view.py'
def technical_summary_report(symbol: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/finbrain_view.py#L14)

Description: Print technical summary report provided by FinBrain's API

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the technical summary | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>