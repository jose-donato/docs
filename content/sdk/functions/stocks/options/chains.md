---
title: chains
description: OpenBB SDK Function
---

# chains

## openbb_terminal.stocks.options.options_sdk_helper.get_full_option_chain

```python title='openbb_terminal/stocks/options/options_sdk_helper.py'
def get_full_option_chain(symbol: str, source: str, expiration: Optional[str]) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/options_sdk_helper.py#L14)

Description: Get Option Chain For A Stock.  No greek data is returned

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get chain for | None | False |
| source | str | Source to get data from, by default "Nasdaq" | None | True |
| expiration | str | Date to get chain for.  By default returns all dates | returns | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of full option chain. |

## Examples


To get a specific expiration date, use the expiration parameter

```python
from openbb_terminal.sdk import openbb
aapl_option_chain = openbb.stocks.options.chains("AAPL", source = "Nasdaq")
```

