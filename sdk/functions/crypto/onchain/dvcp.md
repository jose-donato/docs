---
title: dvcp
description: OpenBB SDK Function
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




# VIEW

# dvcp

## crypto_onchain_bitquery_view.display_daily_volume_for_given_pair

```python
def dvc) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L86)

Description: Display daily volume for given pair

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ERC20 token symbol or address | None | False |
| to_symbol | str | Quote currency. | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Token volume on different decentralized exchanges |

## Examples

