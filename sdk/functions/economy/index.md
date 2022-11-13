---
title: index
description: Get data on selected indices over time [Source: Yahoo Finance]
---
# index

## economy_yfinance_model.get_indices

```python
def index(indices: list, interval: str, start_date: int, end_date: int, column: str, returns: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_model.py#L669)

Description: Get data on selected indices over time [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| indices | list | A list of indices to get data. Available indices can be accessed through economy.available_indices(). | None | False |
| interval | str | Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
Intraday data cannot extend last 60 days | None | False |
| start_date | str | The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| column | str | Which column to load in, by default this is the Adjusted Close. | this | False |
| returns | bool | Flag to show cumulative returns on index | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.Dataframe | None | Dataframe with historical data on selected indices. | None | None |

## Returns

None

## Examples

