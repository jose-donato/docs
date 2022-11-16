---
title: panel
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# panel

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.econometrics.regression_model.get_regressions_results

```python title='openbb_terminal/econometrics/regression_model.py'
def get_regressions_results(regression_type: str, regression_variables: List[Tuple], data: Dict[str, pd.DataFrame], entity_effects: bool, time_effects: bool) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L33)

Description: Based on the regression type, this function decides what regression to run.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_type | str | The type of regression you wish to execute. | None | False |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |
| entity_effects | bool | Whether to apply Fixed Effects on entities. | None | False |
| time_effects | bool | Whether to apply Fixed Effects on time. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| A regression model |  |

## Examples

SDK Snippet:
```python
from openbb_terminal.sdk import openbb
df = openbb.econometrics.load("wage_panel")
df = df.set_index(["nr","year"])
X = df[["exper","educ","union"]]
Y = df["lwage"]
pooled_ols_model = openbb.econometrics.panel(Y,X,"POLS")
print(pooled_ols_model.summary)
```

Results:
```python
                            Parameter Estimates
==============================================================================
            Parameter  Std. Err.     T-stat    P-value    Lower CI    Upper CI
------------------------------------------------------------------------------
const         -0.0308     0.0620    -0.4965     0.6196     -0.1523      0.0908
exper          0.0561     0.0028     20.220     0.0000      0.0507      0.0616
educ           0.1080     0.0045     24.034     0.0000      0.0992      0.1168
union          0.1777     0.0172     10.344     0.0000      0.1441      0.2114
==============================================================================
```



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.econometrics.regression_view.display_panel

```python title='openbb_terminal/econometrics/regression_view.py'
def display_panel(Y: pd.DataFrame, X: pd.DataFrame, regression_type: str, entity_effects: bool, time_effects: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L23)

Description: Based on the regression type, this function decides what regression to run.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | dict | A dictionary containing the datasets. | None | False |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable.<br/>each column/dataset combination. | None | False |
| regression_type | str | The type of regression you wish to execute. Choose from:<br/>OLS, POLS, RE, BOLS, FE | None | False |
| entity_effects | bool | Whether to apply Fixed Effects on entities. | None | False |
| time_effects | bool | Whether to apply Fixed Effects on time. | None | False |
| export | str | Format to export data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| The dataset used, the dependent variable, the independent variable and |  |

## Examples



</TabItem>
</Tabs>