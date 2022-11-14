---
title: obv
description: OpenBB SDK Function
---
# obv

## common_ta_volume_model.obv

```python
def obv(data: pd.DataFrame) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_model.py#L89)

Description: On Balance Volume

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with technical indicator |

## Examples




# VIEW

# obv

## common_ta_volume_view.display_obv

```python
def obv(data: pd.DataFrame, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_view.py#L248)

Description: Plot OBV technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| symbol | str | Ticker | None | False |
| export | str | Format to export data as | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

