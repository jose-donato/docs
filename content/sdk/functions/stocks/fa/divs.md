---
title: divs
description: OpenBB SDK Function
---

# divs

Get historical dividend for ticker

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_model.py#L256)]
```python
def get_dividends(symbol: str) -> pd.DataFrame
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get dividend for | None | False |

---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of dividends and dates |
---
