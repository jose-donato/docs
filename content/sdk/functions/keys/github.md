---
title: github
description: OpenBB SDK Function
---

# github

Set GitHub key.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1975)

```python
def set_github_key(key: str, persist: bool, show_output: bool) -> str
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | None | False |
| show_output | bool | Display status string or not. By default, False. | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |

---

## Examples

---

