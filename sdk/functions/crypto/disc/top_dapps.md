---
title: top_dapps
description: Get top decentralized applications by daily volume and users [Source: https://dappradar.com/]
---
# top_dapps

## crypto_disc_dappradar_model.get_top_dapps

```python
def top_dapps(sortby: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L206)

Description: Get top decentralized applications by daily volume and users [Source: https://dappradar.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top decentralized exchanges.
Columns: Name, Category, Protocols, Daily Users, Daily Volume [$] |

## Examples

