---
title: spacc
description: OpenBB SDK Function
---

# spacc

Get top tickers from r/SPACs [Source: reddit].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L317)

```python
def get_spac_community(limit: int, popular: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of posts to look at | None | False |
| popular | bool | Search by hot instead of new | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, dict] | Dataframe of reddit submission,<br/>Dictionary of tickers and number of mentions. |

---

## Examples

---

