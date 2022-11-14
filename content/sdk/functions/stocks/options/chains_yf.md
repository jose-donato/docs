---
title: chains_yf
description: OpenBB SDK Function
---
# chains_yf

## stocks_options_yfinance_model.get_option_chain

```python
def chains_yf(symbol: str, expiry: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L157)

Description: Gets option chain from yf for given ticker and expiration

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get options for | None | False |
| expiry | str | Date to get options for. YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| yf.ticker.Options | Options chain |

## Examples




# VIEW

# chains_yf

## stocks_options_yfinance_view.display_chains

```python
def chains_yf(symbol: str, expiry: str, min_sp: float, max_sp: float, calls_only: bool, puts_only: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L71)

Description: Display option chains for given ticker and expiration

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Expiration for option chain | None | False |
| min_sp | float | Min strike | None | False |
| max_sp | float | Max strike | None | False |
| calls_only | bool | Flag to get calls only | None | False |
| puts_only | bool | Flag to get puts only | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

