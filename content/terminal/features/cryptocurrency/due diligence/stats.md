---
title: stats
description: OpenBB Terminal Function
---

# stats

Display coin stats

### Usage

```python
usage: stats [--vs {USDT,USD,GBP,USD,EUR,USDC}]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| vs | Quote currency (what to view coin vs) | USDT | True | USDT, USD, GBP, USD, EUR, USDC |
---

## Examples

```python
2022 Feb 15, 07:47 (🦋) /crypto/dd/ $ stats

       24 hr Product Stats
┌──────────────┬────────────────┐
│ Metric       │ Value          │
├──────────────┼────────────────┤
│ open         │ 42551.99       │
├──────────────┼────────────────┤
│ high         │ 44428.47       │
├──────────────┼────────────────┤
│ low          │ 41800          │
├──────────────┼────────────────┤
│ volume       │ 743.03129474   │
├──────────────┼────────────────┤
│ last         │ 44183.84       │
├──────────────┼────────────────┤
│ volume_30day │ 22665.06104665 │
└──────────────┴────────────────┘
```

---

