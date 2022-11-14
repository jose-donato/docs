---
title: balance
description: OpenBB SDK Function
---
# balance

## crypto_dd_binance_model.get_balance

```python
def balanc) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L174)

Description: Get account holdings for asset. [Source: Binance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency | None | False |
| to_symbol | str | Cryptocurrency | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with account holdings for an asset |

## Examples




# VIEW

# balance

## crypto_dd_binance_view.display_balance

```python
def balance(from_symbol: str, to_symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_view.py#L63)

Description: Get account holdings for asset. [Source: Binance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency | None | False |
| to_symbol | str | Cryptocurrency | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |

## Returns

None

## Examples

