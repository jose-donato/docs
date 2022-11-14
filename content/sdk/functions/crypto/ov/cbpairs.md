---
title: cbpairs
description: OpenBB SDK Function
---
# cbpairs

## crypto_ov_coinbase_model.get_trading_pairs

```python
def cbpairs(limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinbase_model.py#L23)

Description: Get a list of available currency pairs for trading. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Top n of pairs | None | False |
| sortby | str | Key to sortby data | None | False |
| ascend | bool | Sort descending flag | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Available trading pairs on Coinbase |

## Examples




# VIEW

# cbpairs

## crypto_ov_coinbase_view.display_trading_pairs

```python
def cbpair) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L18)

Description: Displays a list of available currency pairs for trading. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Top n of pairs | None | False |
| sortby | str | Key to sortby data | None | False |
| ascend | bool | Sort ascending flag | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

