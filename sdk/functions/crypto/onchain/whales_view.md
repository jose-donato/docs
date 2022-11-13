---
title: whales
description: Display huge value transactions from major blockchains. [Source: https://docs.whale-alert.io/]
---
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

