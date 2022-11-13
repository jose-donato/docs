# es

## portfolio_model.get_es

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1722)

Description: Get portfolio expected shortfall

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| use_mean |  | if one should use the data mean return | None | False |
| distribution | str | choose distribution to use: logistic, laplace, normal | None | False |
| percentile | float | es percentile (%) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | None |

## Examples

