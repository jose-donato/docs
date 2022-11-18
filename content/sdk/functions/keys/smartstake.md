---
title: smartstake
description: OpenBB SDK Function
---

# smartstake

Set Smartstake key.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1892)]
```python
def set_smartstake_key(key: str, access_token: str, persist: bool = False, show_output: bool = False) -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| access_token | str | API token | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| str | Status of key set |
---
