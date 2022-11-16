---
title: il
description: OpenBB Terminal Function
---

# Tools

## il

### Description: 

Tool to calculate Impermanent Loss in a custom liquidity pool. Users can provide percentages increases for two tokens (and their weight in the liquidity pool) and verify the impermanent loss that can occur.

### Usage: 
```python
usage: il [-a PRICECHANGEA] [-b PRICECHANGEB] [-p PROPORTION] [-v VALUE] [-n]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| priceChangeA | Token A price change in percentage | None | False | None |
| priceChangeB | Token B price change in percentage | 100 | False | None |
| proportion | Pool proportion. E.g., 50 means that pool contains 50%% of token A and 50%% of token B, 30 means that pool contains 30%% of token A and 70%% of token B | 50 | False | None |
| value | Initial amount of dollars that user provides to liquidity pool | 1000 | False | None |
| narrative | Flag to show narrative instead of dataframe | None | False | None |


