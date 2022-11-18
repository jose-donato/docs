---
title: walert
description: OpenBB SDK Function
---

# walert

Set Walert key

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1571)]

```python
def set_walert_key(key: str, persist: bool = False, show_output: bool = False) -> str
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |
---

