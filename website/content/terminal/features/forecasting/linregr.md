---
title: linregr
description: OpenBB Terminal Function
---

# linregr

Perform a linear regression forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.linear_regression_model.html

### Usage

```python
usage: linregr
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:03 (🦋) /forecast/ $ linregr GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0700:00, 15.10it/s]
Logistic Regression model obtains MAPE: 10.85%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 144.41   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 142.69   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 140.94   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 139.89   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 136.04   │
└─────────────────────┴────────────┘
```

![linregr](https://user-images.githubusercontent.com/72827203/180615335-26395da8-3848-40f4-a68b-d2c14475db95.png)

---

