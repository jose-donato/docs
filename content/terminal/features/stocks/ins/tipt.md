---
title: tipt
description: OpenBB Terminal Function
---

# Insiders

## tipt

### Description: 

Print top insider purchases of the day. [Source: OpenInsider]

### Usage: 
```python
usage: tipt [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of datarows to display | 10 | False | None |


## Examples

```python

2022 Feb 16, 08:18 (✨) /stocks/ins/ $ tipt
                                                                          Insider Data
┏━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┓
┃ X ┃ Filing Date ┃ Trade Date ┃ Ticker ┃ Company Name     ┃ Insider Name         ┃ Title    ┃ Trade Type   ┃ Price ┃ Qty     ┃ Owned   ┃ Diff Own ┃ Value     ┃
┡━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━┩
│ M │ 2022-02-16  │ 2022-02-09 │ ZIVO   │ Zivo Bioscience, │ Maggiore Christopher │ Dir, 10% │ P - Purchase │ $3.72 │ +91,334 │ 803,105 │ +13%     │ +$340,098 │
│   │ 06:02:09    │            │        │ Inc.             │ D.                   │          │              │       │         │         │          │           │
└───┴─────────────┴────────────┴────────┴──────────────────┴──────────────────────┴──────────┴──────────────┴───────┴─────────┴─────────┴──────────┴───────────┘
M: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price

```

