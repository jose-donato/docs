---
title: theta
description: OpenBB Terminal Function
---

# theta

Perform Theta forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.theta.html

### Usage

```python
usage: theta
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:01 (🦋) /forecast/ $ theta GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:2300:00,  4.88it/s]
Theta Model obtains MAPE: 12.71%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 145.41   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 147.28   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 147.28   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 148.66   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 147.18   │
└─────────────────────┴────────────┘
```

![theta](https://user-images.githubusercontent.com/72827203/180615324-5b50445c-cc95-4efa-84a6-85e85ddc2d28.png)

---

