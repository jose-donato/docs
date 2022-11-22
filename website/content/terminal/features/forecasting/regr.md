---
title: regr
description: OpenBB Terminal Function
---

# regr

Perform a regression forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.regression_model.html

### Usage

```python
usage: regr
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:08 (🦋) /forecast/ $ regr GME
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0100:00, 111.85it/s]
Regression model obtains MAPE: 12.34%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 143.74   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 144.90   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 142.41   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 133.50   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 134.24   │
└─────────────────────┴────────────┘
```

![regr](https://user-images.githubusercontent.com/72827203/180615346-82fae367-d0cc-4d78-be30-b947a83df909.png)

---

