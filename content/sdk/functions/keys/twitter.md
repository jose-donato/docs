---
title: twitter
description: OpenBB SDK Function
---

# twitter

Set Twitter key

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1048)

```python
def set_twitter_key(key: str, secret: str, access_token: str, persist: bool, show_output: bool) -> str
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| secret | str | API secret | None | False |
| access_token | str | API token | None | False |
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

