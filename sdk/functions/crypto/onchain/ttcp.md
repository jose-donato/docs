---
title: ttcp
description: OpenBB SDK Function
---
# ttcp

## crypto_onchain_bitquery_model.get_most_traded_pairs

```python
def ttcp(network: str, exchange: str, limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L657)

Description: Get most traded crypto pairs on given decentralized exchange in chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| network | str | EVM network. One from list: bsc (binance smart chain), ethereum or matic | None | False |
| exchange |  | Decentralized exchange name | None | False |
| limit |  | Number of days taken into calculation account. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

None

## Examples




# VIEW

# ttcp

## crypto_onchain_bitquery_view.display_most_traded_pairs

```python
def ttc) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L283)

Description: Display most traded crypto pairs on given decentralized exchange in chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange |  | Decentralized exchange name | None | False |
| days |  | Number of days taken into calculation account. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most traded crypto pairs on given decentralized exchange in chosen time period. |

## Examples

