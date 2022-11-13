---
title: fred_yeild_curve
description: OpenBB SDK Function
---
# fred_yeild_curve

## economy_fred_model.get_yield_curve

```python
def fred_yeild_curv) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L250)

Description: Gets yield curve data from FRED

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get curve for.  If None, gets most recent date | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of yields and maturities |

## Examples




# VIEW

# fred_yeild_curve

## economy_fred_view.display_yield_curve

```python
def fred_yeild_curv) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L176)

Description: Display yield curve based on US Treasury rates for a specified date.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get yield curve for | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes to plot data on | None | False |

## Returns

None

## Examples
