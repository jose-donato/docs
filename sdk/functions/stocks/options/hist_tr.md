---
title: hist_tr
description: OpenBB SDK Function
---
# hist_tr

## stocks_options_tradier_model.get_historical_options

```python
def hist_t) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L43)

Description: Gets historical option pricing.  This inputs either ticker, expiration, strike or the OCC chain ID and processes

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration date | None | False |
| strike | int | Option strike price | None | False |
| put | bool | Is this a put option? | None | False |
| chain_id | Optional[str] | OCC chain ID | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical option prices |

## Examples




# VIEW

# hist_tr

## stocks_options_tradier_view.display_historical

```python
def hist_tr(symbol: str, expiry: str, strike: float, put: bool, raw: bool, chain_id: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/tradier_view.py#L627)

Description: Plot historical option prices

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Expiry date of option | None | False |
| strike | float | Option strike price | None | False |
| put | bool | Is this a put option? | None | False |
| raw | bool | Print raw data | None | False |
| chain_id | str | OCC option symbol | None | False |
| export | str | Format of export file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

