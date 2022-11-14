---
title: stats
description: OpenBB SDK Function
---
# stats

## crypto_nft_opensea_model.get_collection_stats

```python
def stats(slug: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/opensea_model.py#L16)

Description: Get stats of a nft collection [Source: opensea.io]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | collection stats |

## Examples




# VIEW

# stats

## crypto_nft_opensea_view.display_collection_stats

```python
def stats(slug: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/opensea_view.py#L14)

Description: Display collection stats. [Source: opensea.io]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | Opensea collection slug.
If the name of the collection is Mutant Ape Yacht Club the slug is mutant-ape-yacht-club | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

