---
title: expo
description: OpenBB Terminal Function
---

# expo

Perform Probabilistic Exponential Smoothing forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.exponential_smoothing.html

### Usage

```python
usage: expo [--trend {N,A,M}] [--dampen DAMPEN]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| trend | Trend: N: None, A: Additive, M: Multiplicative. | A | True | N, A, M |
| dampen | Dampening | F | True | None |
---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 10:52 (🦋) /forecast/ $ expo GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:1600:00,  6.80it/s]
Exponential smoothing obtains MAPE: 12.88%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 146.35   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 148.63   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 148.86   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 151.76   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 149.74   │
└─────────────────────┴────────────┘
```

![expo](https://user-images.githubusercontent.com/72827203/180615313-e45d6cb3-06a8-45aa-ae4e-505df07e7210.png)

---

