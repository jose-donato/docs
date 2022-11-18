---
title: bench
description: OpenBB Terminal Function
---

# bench

Load in a benchmark from a selected list or set your own based on the ticker.

### Usage 
```python
usage: bench -b BENCHMARK [BENCHMARK ...] [-s]
```

---
## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| benchmark | Set the benchmark for the portfolio. By default, this is SPDR S&P 500 ETF Trust (SPY). | SPY | False | None |
| full_shares | Whether to only make a trade with the benchmark when a full share can be bought (no partial shares). | False | True | None |


---
## Examples

```python
2022 May 10, 09:53 (🦋) /portfolio/ $ bench Vanguard FTSE Developed Markets ETF (VEA)

Benchmark: Vanguard Developed Markets Index Fund (VEA)

2022 May 10, 09:53 (🦋) /portfolio/ $
```

