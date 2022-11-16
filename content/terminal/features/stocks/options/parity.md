---
title: parity
description: OpenBB Terminal Function
---

# Options

## parity

### Description: 

Shows whether options are over or under valued

### Usage: 
```python
usage: parity [-p] [-a] [-m MINI] [-M MAXI]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| put | Shows puts instead of calls | False | True | None |
| ask | Use ask price instead of lastPrice | False | True | None |
| mini | Minimum strike price shown | None | True | None |
| maxi | Maximum strike price shown | None | True | None |


## Examples

```python

2022 Feb 16, 09:17 (✨) /stocks/options/ $ load TSLA

2022 Feb 16, 09:18 (✨) /stocks/options/ $ parity -m 900 -M 950
Warning: Low volume options may be difficult to trade.
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃ Strike ┃ Call Difference ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ 900.00 │ -3.49           │
├────────┼─────────────────┤
│ 905.00 │ -3.37           │
├────────┼─────────────────┤
│ 910.00 │ -4.09           │
├────────┼─────────────────┤
│ 915.00 │ -1.39           │
├────────┼─────────────────┤
│ 920.00 │ -2.34           │
├────────┼─────────────────┤
│ 925.00 │ -2.65           │
├────────┼─────────────────┤
│ 930.00 │ -2.46           │
├────────┼─────────────────┤
│ 935.00 │ -5.14           │
├────────┼─────────────────┤
│ 940.00 │ -3.89           │
├────────┼─────────────────┤
│ 945.00 │ -8.08           │
├────────┼─────────────────┤
│ 950.00 │ -3.23           │
└────────┴─────────────────┘

```

