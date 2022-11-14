---
title: stoch
description: OpenBB SDK Function
---
# stoch

## common_ta_momentum_model.stoch

```python
def stoch(data: pd.DataFrame, fastkperiod: int, slowdperiod: int, slowkperiod: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L125)

Description: Stochastic oscillator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| fastkperiod | int | Fast k period | None | False |
| slowdperiod | int | Slow d period | None | False |
| slowkperiod | int | Slow k period | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Dataframe of technical indicator | None | None |

## Returns

None

## Examples




# VIEW

# stoch

## common_ta_momentum_view.display_stoch

```python
def stoch(data: pd.DataFrame, fastkperiod: int, slowdperiod: int, slowkperiod: int, symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L306)

Description: Plot stochastic oscillator signal

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| fastkperiod | int | Fast k period | None | False |
| slowdperiod | int | Slow d period | None | False |
| slowkperiod | int | Slow k period | None | False |
| symbol | str | Stock ticker symbol | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

