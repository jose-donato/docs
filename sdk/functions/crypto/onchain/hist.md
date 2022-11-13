---
title: hist
description: Get information about balance historical transactions. [Source: Ethplorer]
---
# hist

## crypto_onchain_ethplorer_model.get_address_history

```python
def hist(address: Any, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L328)

Description: Get information about balance historical transactions. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Blockchain balance e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in ascending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with balance historical transactions (last 100) |

## Examples

