---
title: getdd
description: OpenBB SDK Function
---

# getdd

Gets due diligence posts from list of subreddits [Source: reddit].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L711)

```python
def get_due_dilligence(symbol: str, limit: int, n_days: int, show_all_flairs: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| limit | int | Number of posts to get | None | False |
| n_days | int | Number of days back to get posts | None | False |
| show_all_flairs | bool | Search through all flairs (apart from Yolo and Meme) | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of submissions |

---

## Examples

---

