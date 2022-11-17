---
title: add
description: OpenBB Terminal Function
---

# Pricing

## add

### Description: 

Adds a price to the list

### Usage: 
```python
usage: add -p PRICE -c CHANCE
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| price | Projected price of the stock at the expiration date | None | False | None |
| chance | Chance that the stock is at a given projected price | None | False | None |


## Examples

```python
2022 Feb 16, 09:42 (✨) /stocks/options/pricing/ $ add -p 175 -c 0.5

2022 Feb 16, 09:43 (✨) /stocks/options/pricing/ $ add -p 165 -c 0.5

2022 Feb 16, 09:43 (✨) /stocks/options/pricing/ $ show
Estimated price(s) of AAPL at 2022-05-20
┏━━━━━━━━┳━━━━━━━━┓
┃ Price  ┃ Chance ┃
┡━━━━━━━━╇━━━━━━━━┩
│ 165.00 │ 0.50   │
├────────┼────────┤
│ 175.00 │ 0.50   │
└────────┴────────┘
```

