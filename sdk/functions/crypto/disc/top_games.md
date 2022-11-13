---
title: top_games
description: Get top blockchain games by daily volume and users [Source: https://dappradar.com/]
---
# top_games

## crypto_disc_dappradar_model.get_top_games

```python
def top_games(sortby: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L163)

Description: Get top blockchain games by daily volume and users [Source: https://dappradar.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top blockchain games. Columns: Name, Daily Users, Daily Volume [$] |

## Examples

