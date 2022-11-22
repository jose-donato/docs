---
title: tcn
description: OpenBB Terminal Function
---

# tcn

Perform TCN forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tcn_model.html

### Usage

```python
usage: tcn [--num-filters NUM_FILTERS] [--weight-norm WEIGHT_NORM] [--dilation-base DILATION_BASE]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| num_filters | The number of filters in a convolutional layer of the TCN | 3 | True | None |
| weight_norm | Boolean value indicating whether to use weight normalization. | True | True | None |
| dilation_base | The base of the exponent that will determine the dilation on every level. | 2 | True | None |
---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:08 (🦋) /forecast/ $ tcn GME
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0100:00, 111.85it/s]
TCN model obtains MAPE: 19.12%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 135.73   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 142.42   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 140.68   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 152.98   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 154.55   │
└─────────────────────┴────────────┘
```

![tcn](https://user-images.githubusercontent.com/72827203/180615408-ac6f9289-c3e9-486f-b262-701ef1906373.png)

---

