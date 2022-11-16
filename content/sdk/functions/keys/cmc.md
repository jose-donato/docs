---
title: cmc
description: OpenBB SDK Function
---

# cmc

## openbb_terminal.keys_model.set_cmc_key

```python title='openbb_terminal/keys_model.py'
def set_cmc_key(key: str, persist: bool, show_output: bool) -> str
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L698)

Description: Set Coinmarketcap key

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

