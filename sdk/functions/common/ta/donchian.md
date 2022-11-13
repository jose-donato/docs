# donchian

## common_ta_volatility_model.donchian

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L52)

Description: Calculate Donchian Channels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| upper_length | int | Length of window to calculate upper channel | None | False |
| lower_length | int | Length of window to calculate lower channel | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of upper and lower channels |

## Examples

