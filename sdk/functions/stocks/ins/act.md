---
title: act
description: OpenBB SDK Function
---
# act

## stocks_insider_businessinsider_model.get_insider_activity

```python
def act(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/businessinsider_model.py#L16)

Description: Get insider activity. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get insider activity data from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get insider activity data |

## Examples




# VIEW

# act

## stocks_insider_businessinsider_view.insider_activity

```python
def act(data: pd.DataFrame, symbol: str, start_date: str, interval: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/businessinsider_view.py#L31)

Description: Display insider activity. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Stock dataframe | None | False |
| symbol | str | Due diligence ticker symbol | None | False |
| start_date | str | Start date of the stock data | None | False |
| interval | str | Stock data interval | None | False |
| limit | int | Number of latest days of inside activity | None | False |
| raw | bool | Print to console | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

