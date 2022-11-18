---
title: load
description: OpenBB SDK Function
---

# load

Load crypto currency to get data for

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/cryptocurrency_helpers.py#L489)

```python
def load(symbol: str, start_date: datetime | str | None, interval: str, exchange: str, vs_currency: str, end_date: datetime | str | None, source: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to get | None | False |
| start_date | str or datetime | Start date to get data from with. - datetime or string format (YYYY-MM-DD) | None | True |
| interval | str | The interval between data points in minutes.<br/>Choose from: 1, 15, 30, 60, 240, 1440, 10080, 43200 | None | False |
| exchange | str: | The exchange to get data from. | None | False |
| vs_currency | str | Quote Currency (Defaults to usdt) | None | False |
| end_date | str or datetime | End date to get data from with. - datetime or string format (YYYY-MM-DD) | None | True |
| source | str | The source of the data<br/>Choose from: CCXT, CoinGecko, YahooFinance | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe consisting of price and volume data |

---

## Examples

---

