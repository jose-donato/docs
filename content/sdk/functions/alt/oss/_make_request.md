---
title: _make_request
description: OpenBB SDK Function
---

# _make_request

Helper method to scrap.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/runa_model.py#L67)]
```python
def _make_request(url: str) -> Optional[bs4.BeautifulSoup]
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| url | str | url to scrape | None | False |

---
## Returns
| Type | Description |
| ---- | ----------- |
| Union[BeautifulSoup, None] | BeautifulSoup object or None |
---
