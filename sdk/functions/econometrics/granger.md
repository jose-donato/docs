# granger

## econometrics_model.get_granger_causality

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L207)

Description: Calculate granger tests

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dependent_series | Series | The series you want to test Granger Causality for. | None | False |
| independent_series | Series | The series that you want to test whether it Granger-causes time_series_y | None | False |
| lags | int | The amount of lags for the Granger test. By default, this is set to 3. | None | False |

None

## Examples

