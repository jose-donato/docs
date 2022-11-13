---
title: search
description: Display results of searching for Mutual Funds
---
# search

## mutual_funds_investpy_view.display_search

```python
def search(by: str, value: str, country: str, limit: int, sortby: str, ascend: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_view.py#L26)

Description: Display results of searching for Mutual Funds

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| by | str | Field to match on.  Can be name, issuer, isin or symbol | None | False |
| value | str | String that will be searched for | None | False |
| country | str | Country to filter on | None | False |
| limit | int | Number to show | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |

## Returns

None

## Examples

