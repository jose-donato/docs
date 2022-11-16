---
title: nhits
description: OpenBB Terminal Function
---

# Forecasting

## nhits

### Description: 

Perform nhits forecast: https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html

### Usage: 
```python
usage: nhits [--num-stacks NUM_STACKS] [--num-blocks NUM_BLOCKS] [--num-layers NUM_LAYERS] [--layer_widths LAYER_WIDTHS] [--activation {ReLU,RReLU,PReLU,Softplus,Tanh,SELU,LeakyReLU,Sigmoid}] [--max_pool_1d]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| num_stacks | The number of stacks that make up the model | 3 | False | None |
| num_blocks | The number of blocks making up every stack | 1 | False | None |
| num_layers | The number of fully connected layers | 2 | False | None |
| layer_widths | The number of neurons in each layer | 3 | False | None |
| activation | The desired activation | ReLU | False | ReLU, RReLU, PReLU, Softplus, Tanh, SELU, LeakyReLU, Sigmoid |
| maxpool1d | Whether to use max_pool_1d or AvgPool1d | None | False | None |


## Examples

```python

2022 Oct 11, 06:38 D /forecast/ $ load AAPL_20220719_201127.csv

2022 Oct 11, 06:38 D /forecast/ $ nhits AAPL_20220719_201127
Epoch 153: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 25/25 [00:00<00:00, 183.87it/s, loss=-1.56, train_loss=-1.60, val_loss=-.954]
Predicting NHITS for 5 days
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 115/115 [00:01<00:00, 92.46it/s]
NHITS model obtains MAPE: 7.45%



   Actual price: 147.07
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Datetime   ┃ Prediction ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 2022-07-19 │ 134.84     │
├────────────┼────────────┤
│ 2022-07-20 │ 141.80     │
├────────────┼────────────┤
│ 2022-07-21 │ 131.06     │
├────────────┼────────────┤
│ 2022-07-22 │ 102.95     │
├────────────┼────────────┤
│ 2022-07-25 │ 123.72     │
└────────────┴────────────┘

```

![nbeats](https://user-images.githubusercontent.com/72827203/195015203-3644fe8c-e1f7-49ab-9595-a19b474948cc.png)

