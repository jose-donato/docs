---
title: gacc
description: Display terra blockchain account growth history [Source: https://fcd.terra.dev/swagger]
---
# gacc

## crypto_defi_terramoney_fcd_view.display_account_growth

```python
def gacc(kind: str, cumulative: bool, limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L138)

Description: Display terra blockchain account growth history [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| kind | str | display total account count or active account count. One from list [active, total] | None | False |
| cumulative | bool | Flag to show cumulative or discrete values. For active accounts only discrete value are available. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

