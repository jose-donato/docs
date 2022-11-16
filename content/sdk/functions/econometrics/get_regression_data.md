---
title: get_regression_data
description: OpenBB SDK Function
---

# get_regression_data

## openbb_terminal.econometrics.regression_model.get_regression_data

```python title='openbb_terminal/econometrics/regression_model.py'
def get_regression_data(regression_variables: List[tuple], data: Dict[str, pd.DataFrame], regression_type: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L114)

Description: This function creates a DataFrame with the required regression data as

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |
| regression_type | str | The type of regression that is executed. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any]] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>OLS model. |

## Examples

