---
title: cpexchanges
description: List exchanges from CoinPaprika API. [Source: CoinPaprika]
---
# cpexchanges

## crypto_ov_coinpaprika_view.display_all_exchanges

```python
def cpexchanges(symbol: str, sortby: str, ascend: bool, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L212)

Description: List exchanges from CoinPaprika API. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| currency | str | Quoted currency | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| links | bool | Flag to display urls | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

