---
title: dvcp
description: Get daily volume for given pair [Source: https://graphql.bitquery.io/]
---
# dvcp

## crypto_onchain_bitquery_model.get_daily_dex_volume_for_given_pair

```python
def dvcp(limit: int, symbol: str, to_symbol: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L399)

Description: Get daily volume for given pair [Source: https://graphql.bitquery.io/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Daily volume for given pair |

## Examples

