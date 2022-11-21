---
title: tft
description: OpenBB Terminal Function
---

# tft

Perform TFT forecast (Temporal Fusion Transformer): https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html

### Usage

```python
usage: tft [--lstm-layers LSTM_LAYERS] [--num-attention-heads NUM_ATTENTION_HEADS] [--full-attention] [--hidden-continuous-size HIDDEN_CONTINUOUS_SIZE]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| lstm_layers | Number of LSTM layers. | 1 | True | None |
| num_attention_heads | Number of attention heads. | 4 | True | None |
| full_attention | Whether to apply a multi-head attention query. | False | True | None |
| hidden_continuous_size | Default hidden size for processing continuous variables. | 8 | True | None |
---

## Examples

```python
2022 Jul 23, 10:36 (🦋) /forecast/ $ load GME_20220719_123734.csv -a GME

2022 Jul 23, 11:03 (🦋) /forecast/ $ tft GME
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:0700:00, 15.10it/s]
TFT model obtains MAPE: 44.60%



       Actual price: $ 146.64
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime            ┃ Prediction ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 00:00:00 │ $ 169.69   │
├─────────────────────┼────────────┤
│ 2022-07-20 00:00:00 │ $ 168.53   │
├─────────────────────┼────────────┤
│ 2022-07-21 00:00:00 │ $ 167.33   │
├─────────────────────┼────────────┤
│ 2022-07-22 00:00:00 │ $ 167.23   │
├─────────────────────┼────────────┤
│ 2022-07-25 00:00:00 │ $ 165.82   │
└─────────────────────┴────────────┘
```

![tft](https://user-images.githubusercontent.com/72827203/180615444-47bcdd54-0693-4415-9617-ed3a571b26c6.png)

---

