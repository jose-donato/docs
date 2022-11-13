---
title: info
description: OpenBB SDK Function
---
# info

## stocks_options_yfinance_model.get_info

```python
def info(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L278)

Description: Get info for a given ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol to get the price for | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| price | float | The info for a given ticker | None | False |

## Returns

None

## Examples




# VIEW

# info

## stocks_options_barchart_view.print_options_data

```python
def info(symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/barchart_view.py#L14)

Description: Scrapes Barchart.com for the options information

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get options info for | None | False |
| export | str | Format of export file | None | False |

## Returns

None

## Examples

