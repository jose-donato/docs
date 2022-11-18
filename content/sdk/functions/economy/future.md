---
title: future
description: OpenBB SDK Function
---

# future

Get futures data. [Source: Finviz]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L187)

```python
def get_futures(future_type: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| future_type | str | From the following: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies |

---

## Examples

---

