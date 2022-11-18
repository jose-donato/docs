---
title: chains
description: OpenBB SDK Function
---

# chains

Get Option Chain For A Stock.  No greek data is returned

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/options_sdk_helper.py#L14)]

```python
def get_full_option_chain(symbol: str, source: str = "Nasdaq", expiration: Optional[str] = None) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get chain for | None | False |
| source | str | Source to get data from, by default "Nasdaq" | Nasdaq | True |
| expiration | str | Date to get chain for.  By default returns all dates | None | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of full option chain. |
---

## Examples

To get a specific expiration date, use the expiration parameter

```python
from openbb_terminal.sdk import openbb
aapl_option_chain = openbb.stocks.options.chains("AAPL", source = "Nasdaq")
```

---

