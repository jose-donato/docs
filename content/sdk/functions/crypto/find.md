---
title: find
description: OpenBB SDK Function
---

# find

Find similar coin by coin name,symbol or id.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/cryptocurrency_helpers.py#L620)]

```python
def find(query: str, source: str = "CoinGecko", key: str = "symbol", limit: int = 10, export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | Cryptocurrency | None | False |
| source | str | Data source of coins.  CoinGecko (cg) or CoinPaprika (cp) or Binance (bin), Coinbase (cb) | CoinGecko | True |
| key | str | Searching key (symbol, id, name) | symbol | True |
| limit | int | Number of records to display | 10 | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---

