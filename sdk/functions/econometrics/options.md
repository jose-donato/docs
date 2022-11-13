---
title: options
description: Obtain columns-dataset combinations from loaded in datasets that can be used in other commands
---
# options

## econometrics_model.get_options

```python
def options(datasets: Dict[str, pd.DataFrame], dataset_name: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L20)

Description: Obtain columns-dataset combinations from loaded in datasets that can be used in other commands

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| datasets | dict | The available datasets. | None | False |
| dataset_name | str | The dataset you wish to show the options for. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | A dictionary with a DataFrame for each option. With dataset_name set, only shows one
options table. |

## Examples

