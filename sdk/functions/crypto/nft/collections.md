---
title: collections
description: OpenBB SDK Function
---
# collections

## crypto_nft_pricefloor_model.get_collections

```python
def collection) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/nftpricefloor_model.py#L23)

Description: Get nft collections [Source: https://nftpricefloor.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | nft collections |

## Examples




# VIEW

# collections

## crypto_nft_pricefloor_view.display_collections

```python
def collections(show_fp: bool, show_sales: bool, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/nftpricefloor_view.py#L26)

Description: Display NFT collections. [Source: https://nftpricefloor.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| show_fp | bool | Show NFT Price Floor for top collections | None | False |
| limit | int | Number of NFT collections to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

