---
title: gainers_or_losers
description: OpenBB SDK Function
---

# gainers_or_losers

Returns data about top gainers - coins which gain the most in given period and

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L196)

```python
def get_gainers_or_losers(limit: int, interval: str, typ: str, sortby: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Num of coins to get | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>API documentation (see /coins/markets in https://www.coingecko.com/en/api/documentation) | None | False |
| interval | str | One from {14d,1h,1y,200d,24h,30d,7d} | None | False |
| typ | str | Either "gainers" or "losers" | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top Gainers / Top Losers - coins which gain/lost most in price in given period of time.<br/>Columns: Symbol, Name, Volume, Price, %Change_{interval}, Url |

---

## Examples

---

