---
title: mstl
description: OpenBB Terminal Function
---

# mstl

Perform Multiple Seasonalities and Trend using Loess (MSTL) forecast: https://nixtla.github.io/statsforecast/examples/multipleseasonalities.html

### Usage

```python
usage: mstl
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Nov 07, 18:16 (🦋) /forecast/ $ mstl AAPL

Cross Validation Time Series 1: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0100:00, 103.78it/s]
Forecast: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1/1 [00:0000:00, 19.19it/s]
MSTL obtains MAPE: 3.37% 


   Actual price: 138.38    
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-11-07 │ 137.45     │
├────────────┼────────────┤
│ 2022-11-08 │ 142.27     │
├────────────┼────────────┤
│ 2022-11-09 │ 140.00     │
├────────────┼────────────┤
│ 2022-11-10 │ 141.32     │
├────────────┼────────────┤
│ 2022-11-11 │ 141.36     │
└────────────┴────────────┘
```

---

