---
title: pcr
description: Display put call ratio [Source: AlphaQuery.com]
---
# pcr

## stocks_options_alphaquery_view.display_put_call_ratio

```python
def pcr(symbol: str, window: int, start_date: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/alphaquery_view.py#L25)

Description: Display put call ratio [Source: AlphaQuery.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| window | int | Window length to look at, by default 30 | 30 | True |
| start_date | str | Starting date for data, by default (datetime.now() - timedelta(days=366)).strftime("%Y-%m-%d") | None | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

