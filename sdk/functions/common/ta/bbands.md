# bbands

## common_ta_volatility_model.bbands

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L17)

Description: Calculate Bollinger Bands

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| window | int | Length of window to calculate BB | None | False |
| n_std | float | Number of standard deviations to show | None | False |
| mamode | str | Method of calculating average | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of bollinger band data |

## Examples

