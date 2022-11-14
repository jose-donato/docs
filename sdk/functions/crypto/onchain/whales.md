---
title: whales
description: OpenBB SDK Function
---
# whales

## crypto_onchain_whale_alert_model.get_whales_transactions

```python
def whales(min_value: int, limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/whale_alert_model.py#L85)

Description: Whale Alert's API allows you to retrieve live and historical transaction data from major blockchains.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| min_value | int | Minimum value of trade to track. | None | False |
| limit | int | Limit of transactions. Max 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in ascending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Crypto wales transactions |

## Examples




# VIEW

# whales

## crypto_onchain_whale_alert_view.display_whales_transactions

```python
def whale) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L20)

Description: Display huge value transactions from major blockchains. [Source: https://docs.whale-alert.io/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| min_value | int | Minimum value of trade to track. | None | False |
| limit | int | Limit of transactions. Maximum 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in ascending order. | None | False |
| show_address | bool | Flag to show addresses of transactions. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

