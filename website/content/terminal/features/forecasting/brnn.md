---
title: brnn
description: OpenBB Terminal Function
---

# brnn

Perform BRNN forecast (Vanilla RNN, LSTM, GRU): https://unit8co.github.io/darts/generated_api/darts.models.forecasting.block_rnn_model.html

### Usage

```python
usage: brnn [--n-rnn-layers N_RNN_LAYERS]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_rnn_layers | Number of layers in the RNN module. | 1 | True | None |
---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:03 (🦋) /forecast/ $ brnn GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0700:00, 15.10it/s]
Block RNN model obtains MAPE: 17.09%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 147.89   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 149.11   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 149.59   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 141.46   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 144.99   │
└─────────────────────┴────────────┘
```

![brnn](https://user-images.githubusercontent.com/72827203/180615365-1644ce7a-050e-4ee1-92c2-4518db14f53d.png)

---

