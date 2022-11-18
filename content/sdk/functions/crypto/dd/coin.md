---
title: coin
description: OpenBB SDK Function
---

# coin

Get coin by id [Source: CoinPaprika]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L427)]
```python
def get_coin(symbol: str = "eth-ethereum") -> dict
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | id of coin from coinpaprika e.g. Ethereum - > 'eth-ethereum' | eth-ethereum | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| dict | Coin response |
---
