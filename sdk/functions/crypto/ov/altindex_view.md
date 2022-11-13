---
title: altindex
description: Displays altcoin index overtime
---
# altindex

## crypto_ov_blockchaincenter_view.display_altcoin_index

```python
def altindex(period: int, start_date: str, end_date: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/blockchaincenter_view.py#L26)

Description: Displays altcoin index overtime

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| period | int | Number of days to check the performance of coins and calculate the altcoin index.
E.g., 365 will check yearly performance , 90 will check seasonal performance (90 days),
30 will check monthly performance (30 days). | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

