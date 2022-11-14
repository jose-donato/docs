---
title: fp
description: OpenBB SDK Function
---
# fp

## crypto_nft_pricefloor_model.get_floor_price

```python
def fp(slug: Any) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/nftpricefloor_model.py#L45)

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

# fp

## crypto_nft_pricefloor_view.display_floor_price

```python
def fp(slug: str, limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType], raw: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/nft/nftpricefloor_view.py#L87)

Description: Display NFT collection floor price over time. [Source: https://nftpricefloor.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | NFT collection slug | None | False |
| raw | bool | Flag to display raw data | None | False |
| limit | int | Number of raw data to show | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

