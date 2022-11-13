---
title: prices
description: Get token historical prices with volume and market cap, and average price. [Source: Ethplorer]
---
# prices

## crypto_onchain_ethplorer_model.get_token_historical_price

```python
def prices(address: Any, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L537)

Description: Get token historical prices with volume and market cap, and average price. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token e.g. 0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in descending order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with token historical prices. |

## Examples

