---
title: pt
description: Display analysts' price targets for a given stock. [Source: Business Insider]
---
# pt

## stocks_dd_business_insider_view.price_target_from_analysts

```python
def pt(symbol: str, data: pd.DataFrame, start_date: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_view.py#L30)

Description: Display analysts' price targets for a given stock. [Source: Business Insider]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Due diligence ticker symbol | None | False |
| data | DataFrame | Due diligence stock dataframe | None | False |
| start_date | str | Start date of the stock data | None | False |
| limit | int | Number of latest price targets from analysts to print | None | False |
| raw | bool | Display raw data only | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

