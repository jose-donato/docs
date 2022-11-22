---
title: autoces
description: OpenBB Terminal Function
---

# autoces

Perform Automatic Complex Exponential Smoothing forecast: https://nixtla.github.io/statsforecast/models.html#autoces

### Usage

```python
usage: autoces
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Nov 07, 16:42 (🦋) /stocks/ $ forecast

2022 Nov 07, 16:42 (🦋) /forecast/ $ autoces AAPL

Cross Validation Time Series 1: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:1300:00,  8.70it/s]
Forecast: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1/1 [00:0000:00,  3.23it/s]
AutoCES obtains MAPE: 3.09% 


   Actual price: 138.38    
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-11-07 │ 138.70     │
├────────────┼────────────┤
│ 2022-11-08 │ 138.53     │
├────────────┼────────────┤
│ 2022-11-09 │ 139.16     │
├────────────┼────────────┤
│ 2022-11-10 │ 138.91     │
├────────────┼────────────┤
│ 2022-11-11 │ 139.01     │
└────────────┴────────────┘
```

---

