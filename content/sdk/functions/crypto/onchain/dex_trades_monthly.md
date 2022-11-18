---
title: dex_trades_monthly
description: OpenBB SDK Function
---

# dex_trades_monthly

Get list of trades on Decentralized Exchanges monthly aggregated.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L333)

```python
def get_dex_trades_monthly(trade_amount_currency: str, limit: int, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| trade_amount_currency | str | Currency of displayed trade amount. Default: USD | USD | False |
| limit | int | Last n days to query data. Maximum 365 (bigger numbers can cause timeouts<br/>on server side) | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trades on Decentralized Exchanges monthly aggregated |

---

## Examples

---

