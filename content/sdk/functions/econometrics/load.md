---
title: load
description: OpenBB SDK Function
---

# load

Load custom file into dataframe.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/common_model.py#L53)

```python
def load(file: str, data_files: Optional[Dict[Any, Any]], data_examples: Optional[Dict[Any, Any]]) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| file | str | Path to file | None | False |
| data_files | dict | Contains all available data files within the Export folder | None | False |
| data_examples | dict | Contains all available examples from Statsmodels | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with custom data |

---

## Examples

---

