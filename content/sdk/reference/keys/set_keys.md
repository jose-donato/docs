---
title: set_keys
description: OpenBB SDK Function
---

# set_keys

Set API keys in bundle.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L116)]

```python
openbb.keys.set_keys(keys_dict: Dict[str, Dict[str, Union[str, bool]]], persist: bool = False, show_output: bool = False)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| keys_dict | Dict[str, Dict[str, Union[str, bool]]] | E.g. {"fred": {"key":"XXXXX"}, "binance": {"key":"YYYYY", "secret":"ZZZZZ"}}<br/>More info on APIs can be found through get_keys_info(). | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, Jupyter notebook.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Status of each key set. E.g. {"fred": "defined, test passed", "binance": "defined, test failed"} |
---

