---
title: holders
description: Get info about top token holders. [Source: Ethplorer]
---
# holders

## crypto_onchain_ethplorer_model.get_top_token_holders

```python
def holders(address: Any, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L297)

Description: Get info about top token holders. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in descending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with list of top token holders. |

## Examples

