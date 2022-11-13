---
title: cpcontracts
description: Gets all contract addresses for given platform. [Source: CoinPaprika]
---
# cpcontracts

## crypto_ov_coinpaprika_view.display_contracts

```python
def cpcontracts(symbol: str, sortby: str, ascend: bool, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L348)

Description: Gets all contract addresses for given platform. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| platform | str | Blockchain platform like eth-ethereum | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

