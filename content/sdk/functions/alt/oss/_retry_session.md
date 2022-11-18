---
title: _retry_session
description: OpenBB SDK Function
---

# _retry_session

Helper methods that retries to make request.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/runa_model.py#L32)

```python
def _retry_session(url: str, retries: int, backoff_factor: float) -> Session
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| url | str | Url to mount a session | None | False |
| retries | int | How many retries | None | False |
| backoff_factor | float | Backoff schema - time periods between retry | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| requests.Session | Mounted session |

---

## Examples

---

