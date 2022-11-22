---
title: autoarima
description: OpenBB Terminal Function
---

# autoarima

Perform Automatic ARIMA forecast: https://nixtla.github.io/statsforecast/examples/getting_started_with_auto_arima_and_ets.html

### Usage

```python
usage: autoarima
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Nov 07, 16:17 (🦋) /stocks/ $ forecast

2022 Nov 07, 16:17 (🦋) /forecast/ $ autoarima AAPL

Cross Validation Time Series 1: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:2100:00,  5.31it/s]
Forecast: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1/1 [00:0000:00,  1.68it/s]
AutoARIMA obtains MAPE: 2.86% 


   Actual price: 138.38    
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-11-07 │ 138.43     │
├────────────┼────────────┤
│ 2022-11-08 │ 138.43     │
├────────────┼────────────┤
│ 2022-11-09 │ 138.43     │
├────────────┼────────────┤
│ 2022-11-10 │ 138.43     │
├────────────┼────────────┤
│ 2022-11-11 │ 138.43     │
└────────────┴────────────┘
```

---

