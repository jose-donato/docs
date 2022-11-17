---
title: queries
description: OpenBB Terminal Function
---

# Behavioural Analysis

## queries

### Description: 

Print top related queries with this stock's query. [Source: Google]

### Usage: 
```python
usage: queries [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | limit of top related queries to print. | 10 | True | None |


## Examples

```python
2022 Feb 16, 10:38 (✨) /stocks/ba/ $ queries
 Top AMZN's related queries
┏━━━━━━━━━━━━━━━━━━┳━━━━━━━┓
┃ query            ┃ value ┃
┡━━━━━━━━━━━━━━━━━━╇━━━━━━━┩
│ amzn stock       │ 100%  │
├──────────────────┼───────┤
│ amzn price       │ 31%   │
├──────────────────┼───────┤
│ amzn stock price │ 26%   │
├──────────────────┼───────┤
│ aapl             │ 25%   │
├──────────────────┼───────┤
│ tsla             │ 18%   │
├──────────────────┼───────┤
│ aapl stock       │ 15%   │
├──────────────────┼───────┤
│ fb stock         │ 12%   │
├──────────────────┼───────┤
│ msft             │ 12%   │
├──────────────────┼───────┤
│ tsla stock       │ 12%   │
├──────────────────┼───────┤
│ goog             │ 9%    │
└──────────────────┴───────┘
```

