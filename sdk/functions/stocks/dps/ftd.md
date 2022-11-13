---
title: ftd
description: OpenBB SDK Function
---
# ftd

## stocks_dps_sec_model.get_fails_to_deliver

```python
def ftd(symbol: str, start_date: str, end_date: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/sec_model.py#L58)

Description: Display fails-to-deliver data for a given ticker. [Source: SEC]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| start_date | str | Start of data, in YYYY-MM-DD format | None | False |
| end_date | str | End of data, in YYYY-MM-DD format | None | False |
| limit | int | Number of latest fails-to-deliver being printed | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Fail to deliver data | None | None |

## Returns

None

## Examples




# VIEW

# ftd

## stocks_dps_sec_view.fails_to_deliver

```python
def ftd(symbol: str, data: pd.DataFrame, start_date: str, end_date: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/sec_view.py#L26)

Description: Display fails-to-deliver data for a given ticker. [Source: SEC]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| data | pd.DataFrame | Stock data | None | False |
| start_date | str | Start of data, in YYYY-MM-DD format | None | False |
| end_date | str | End of data, in YYYY-MM-DD format | None | False |
| limit | int | Number of latest fails-to-deliver being printed | None | False |
| raw | bool | Print raw data | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples
