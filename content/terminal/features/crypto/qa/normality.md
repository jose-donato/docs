---
title: normality
description: OpenBB Terminal Function
---

# Quantitative Analysis

## normality

### Description: 

Normality tests

### Usage: 
```python
usage: normality
```



## Examples

```python

2022 Feb 16, 11:11 (✨) /stocks/qa/ $ normality
            Normality Statistics
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┓
┃                    ┃ Statistic ┃ p-value ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━┩
│ Kurtosis           │ 10.2422   │ 0.0000  │
├────────────────────┼───────────┼─────────┤
│ Skewness           │ -0.2238   │ 0.8229  │
├────────────────────┼───────────┼─────────┤
│ Jarque-Bera        │ 1155.1958 │ 0.0000  │
├────────────────────┼───────────┼─────────┤
│ Shapiro-Wilk       │ 0.9265    │ 0.0000  │
├────────────────────┼───────────┼─────────┤
│ Kolmogorov-Smirnov │ 0.4680    │ 0.0000  │
└────────────────────┴───────────┴─────────┘

```

