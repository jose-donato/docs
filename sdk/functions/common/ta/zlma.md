# zlma

## common_ta_overlap_model.zlma

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L114)

Description: Gets zero-lagged exponential moving average (ZLEMA) for stock

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Dataframe of dates and prices | None | False |
| length | int | Length of EMA window | None | False |
| offset | int | Length of offset | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| df_ta | pd.DataFrame | Dataframe containing prices and EMA | None | False |

None

## Examples

