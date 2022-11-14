---
title: top_nfts
description: OpenBB SDK Function
---
# top_nfts

## crypto_disc_dappradar_model.get_top_nfts

```python
def top_nfts(sortby: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L77)

Description: Get top nft collections [Source: https://dappradar.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | NFTs Columns: Name, Protocols, Floor Price [$], Avg Price [$], Market Cap [$], Volume [$] |

## Examples




# VIEW

# top_nfts

## crypto_disc_dappradar_view.display_top_nfts

```python
def top_nfts(limit: int, sortby: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_view.py#L19)

Description: Displays top nft collections [Source: https://dappradar.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

