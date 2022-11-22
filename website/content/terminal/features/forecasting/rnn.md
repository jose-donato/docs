---
title: rnn
description: OpenBB Terminal Function
---

# rnn

Perform RNN forecast (Vanilla RNN, LSTM, GRU): https://unit8co.github.io/darts/generated_api/darts.models.forecasting.rnn_model.html

### Usage

```python
usage: rnn [--hidden-dim HIDDEN_DIM] [--training_length TRAINING_LENGTH]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| hidden_dim | Size for feature maps for each hidden RNN layer (h_n) | 20 | True | None |
| training_length | The length of both input (target and covariates) and output (target) time series used during training. Generally speaking, training_length should have a higher value than input_chunk_length because otherwise during training the RNN is never run for as many iterations as it will during training. | 20 | True | None |
---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:03 (🦋) /forecast/ $ rnn GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0700:00, 15.10it/s]
RNN model obtains MAPE: 14.67%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 146.89   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 148.58   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 150.00   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 151.23   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 152.29   │
└─────────────────────┴────────────┘
```

![rnn](https://user-images.githubusercontent.com/72827203/180615355-5c30635a-be63-4b9a-836d-9feb3d3ac263.png)

---

