---
title: hist
description: Display information about balance historical transactions. [Source: Ethplorer]
---
# hist

## crypto_onchain_ethplorer_view.display_address_history

```python
def his) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L157)

Description: Display information about balance historical transactions. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Ethereum blockchain balance e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 | None | False |
| limit | int | Limit of transactions. Maximum 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in ascending order. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

