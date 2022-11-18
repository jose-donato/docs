---
title: wma
description: OpenBB SDK Function
---

# wma

Gets weighted moving average (WMA) for stock

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L67)

```python
def wma(data: pd.Series, length: int, offset: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Dataframe of dates and prices | None | False |
| length | int | Length of SMA window | None | False |
| offset | int | Length of offset | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing prices and WMA |

---

## Examples

---

