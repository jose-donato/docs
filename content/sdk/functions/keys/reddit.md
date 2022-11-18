---
title: reddit
description: OpenBB SDK Function
---

# reddit

Set Reddit key

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L874)]

```python
def set_reddit_key(client_id: str, client_secret: str, password: str, username: str, useragent: str, persist: bool = False, show_output: bool = False) -> str
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| client_id | str | Client ID | None | False |
| client_secret | str | Client secret | None | False |
| password | str | User assword | None | False |
| username | str | User username | None | False |
| useragent | str | User useragent | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |
---

