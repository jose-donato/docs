---
title: rh
description: OpenBB SDK Function
---

# rh

Set Robinhood key

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1134)]

```python
def set_rh_key(username: str, password: str, persist: bool = False, show_output: bool = False) -> str
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| username | str | User username | None | False |
| password | str | User password | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |

---
