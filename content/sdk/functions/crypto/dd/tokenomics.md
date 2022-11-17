---
title: tokenomics
description: OpenBB SDK Function
---

# tokenomics

Get tokenomics for given coin. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L253)]

```python
def get_coin_tokenomics(symbol: str = "") -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | coin symbol to check tokenomics |  | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value with tokenomics |

