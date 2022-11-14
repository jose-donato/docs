---
title: baas
description: OpenBB SDK Function
---
# baas

## crypto_onchain_bitquery_model.get_spread_for_crypto_pair

```python
def baas(symbol: str, to_symbol: str, limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L723)

Description: Get an average bid and ask prices, average spread for given crypto pair for chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quoted currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Average bid and ask prices, spread for given crypto pair for chosen time period |

## Examples




# VIEW

# baas

## crypto_onchain_bitquery_view.display_spread_for_crypto_pair

```python
def baa) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L342)

Description: Display an average bid and ask prices, average spread for given crypto pair for chosen

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days | int | Last n days to query data | None | False |
| symbol | str | ERC20 token symbol | None | False |
| to_symbol | str | Quoted currency. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Average bid and ask prices, spread for given crypto pair for chosen time period |

## Examples

