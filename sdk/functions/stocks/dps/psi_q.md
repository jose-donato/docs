---
title: psi_q
description: OpenBB SDK Function
---
# psi_q

## stocks_dps_quandl_model.get_short_interest

```python
def psi_) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L17)

Description: Plots the short interest of a stock. This corresponds to the

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get short interest from | None | False |
| nyse | bool | data from NYSE if true, otherwise NASDAQ | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | short interest volume data | None | None |

## Returns

None

## Examples




# VIEW

# psi_q

## stocks_dps_quandl_view.short_interest

```python
def psi_) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L96)

Description: Plots the short interest of a stock. This corresponds to the

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get short interest from | None | False |
| nyse | bool | data from NYSE if true, otherwise NASDAQ | None | False |
| limit | int | Number of past days to show short interest | None | False |
| raw | bool | Flag to print raw data instead | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

