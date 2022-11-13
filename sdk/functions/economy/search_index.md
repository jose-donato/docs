---
title: search_index
description: Search indices by keyword. [Source: FinanceDatabase]
---
# search_index

## economy_yfinance_model.get_search_indices

```python
def search_index(keyword: list, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_model.py#L714)

Description: Search indices by keyword. [Source: FinanceDatabase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| keyword | list | The keyword you wish to search for. This can include spaces. | None | False |
| limit | int | The amount of views you want to show, by default this is set to 10. | this | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.Dataframe | None | Dataframe with the available options. | None | None |

## Returns

None

## Examples

