---
title: rise
description: OpenBB Terminal Function
---

# Behavioural Analysis

## rise

### Description: 

Print top rising related queries with this stock's query. [Source: Google]

### Usage: 
```python
usage: rise [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | limit of top rising related queries to print. | 10 | True | None |


## Examples

```python
2022 Feb 16, 10:40 (✨) /stocks/ba/ $ rise
Top rising AAPL's related queries
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃ query           ┃ value  ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│ nio stock       │ 227850 │
├─────────────────┼────────┤
│ nio             │ 183950 │
├─────────────────┼────────┤
│ pltr            │ 103100 │
├─────────────────┼────────┤
│ pltr stock      │ 82800  │
├─────────────────┼────────┤
│ mrna stock      │ 75050  │
├─────────────────┼────────┤
│ zm stock        │ 67850  │
├─────────────────┼────────┤
│ nio stock price │ 64000  │
├─────────────────┼────────┤
│ zm              │ 63500  │
├─────────────────┼────────┤
│ bynd            │ 61450  │
├─────────────────┼────────┤
│ bynd stock      │ 47450  │
└─────────────────┴────────┘
```

