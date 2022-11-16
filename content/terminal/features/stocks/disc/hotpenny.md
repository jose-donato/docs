---
title: hotpenny
description: OpenBB Terminal Function
---

# Discovery

## hotpenny

### Description: 

Provides top penny stocks from various websites. [Source: Yfinance]

### Usage: 
```python
usage: hotpenny [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | limit of stocks to display | 5 | False | None |


## Examples

```python

2022 Feb 16, 04:04 (✨) /stocks/disc/ $ hotpenny
                        Top Penny Stocks
┏━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┓
┃       ┃ Price  ┃ Change ┃ $ Volume     ┃ Volume    ┃ # Trades ┃
┡━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━┩
│ TCEHY │ $61.01 │ 1.55%  │ $303,380,785 │ 4,994,963 │ 17,401   │
├───────┼────────┼────────┼──────────────┼───────────┼──────────┤
│ GBTC  │ $31.28 │ 6.25%  │ $110,596,120 │ 3,545,597 │ 14,364   │
├───────┼────────┼────────┼──────────────┼───────────┼──────────┤
│ BHPLF │ $33.74 │ -1.06% │ $65,818,744  │ 1,962,313 │ 23       │
├───────┼────────┼────────┼──────────────┼───────────┼──────────┤
│ RHHBY │ $46.92 │ 1.49%  │ $56,390,274  │ 1,201,629 │ 2,463    │
└───────┴────────┴────────┴──────────────┴───────────┴──────────┘

```

