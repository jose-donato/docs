---
title: sec
description: OpenBB SDK Function
---
# sec

## stocks_dd_marketwatch_model.get_sec_filings

```python
def sec(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/marketwatch_model.py#L19)

Description: Get SEC filings for a given stock ticker. [Source: Market Watch]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | SEC filings data |

## Examples




# VIEW

# sec

## stocks_dd_marketwatch_view.sec_filings

```python
def sec(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/marketwatch_view.py#L14)

Description: Display SEC filings for a given stock ticker. [Source: Market Watch]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of ratings to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

