---
title: tx
description: Get info about transaction. [Source: Ethplorer]
---
# tx

## crypto_onchain_ethplorer_model.get_tx_info

```python
def tx(tx_hash: Any) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L436)

Description: Get info about transaction. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| tx_hash | str | Transaction hash e.g. 0x9dc7b43ad4288c624fdd236b2ecb9f2b81c93e706b2ffd1d19b112c1df7849e6 | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with information about ERC20 token transaction. |

## Examples

