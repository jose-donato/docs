---
title: eodhd
description: OpenBB SDK Function
---

# eodhd

## openbb_terminal.keys_model.set_eodhd_key

```python title='openbb_terminal/keys_model.py'
def set_eodhd_key(key: str, persist: bool, show_output: bool) -> str
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L2090)

Description: Set Eodhd key.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | None | False |
| show_output | bool | Display status string or not. By default, False. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |

## Examples
