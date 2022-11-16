---
title: ath
description: OpenBB Terminal Function
---

# Due Diligence

## ath

### Description: 

All time high data for loaded coin

### Usage: 
```python
usage: ath [--vs {usd,btc}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| vs | currency | usd | True | usd, btc |


## Examples

```python

2022 Feb 15, 07:04 (✨) /crypto/dd/ $ ath
                            Coin Highs
┌─────────────────────────────────────┬──────────────────────────┐
│ Metric                              │ Value                    │
├─────────────────────────────────────┼──────────────────────────┤
│ Current Price USD                   │ 44302                    │
├─────────────────────────────────────┼──────────────────────────┤
│ All Time High USD                   │ 69045                    │
├─────────────────────────────────────┼──────────────────────────┤
│ All Time High Date USD              │ 2021-11-10T14:24:11.849Z │
├─────────────────────────────────────┼──────────────────────────┤
│ All Time High Change Percentage USD │ -35.75                   │
└─────────────────────────────────────┴──────────────────────────┘

```

