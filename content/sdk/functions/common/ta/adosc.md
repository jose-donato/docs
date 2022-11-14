---
title: adosc
description: OpenBB SDK Function
---
# adosc

## common_ta_volume_model.adosc

```python
def adosc(data: pd.DataFrame, use_open: bool, fast: int, slow: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_model.py#L45)

Description: Calculate AD oscillator technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| use_open | bool | Whether to use open prices | None | False |
| fast | int | Fast value | None | False |
| slow | int | Slow value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with technical indicator |

## Examples




# VIEW

# adosc

## common_ta_volume_view.display_adosc

```python
def adosc(data: pd.DataFrame, fast: int, slow: int, use_open: bool, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_view.py#L140)

Description: Display AD Osc Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| use_open | bool | Whether to use open prices in calculation | None | False |
| fast | int | Length of fast window | None | False |
| slow | int | Length of slow window | None | False |
| symbol | str | Stock ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

