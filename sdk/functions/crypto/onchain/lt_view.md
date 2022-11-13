---
title: lt
description: Trades on Decentralized Exchanges aggregated by DEX or Month
---
# lt

## crypto_onchain_bitquery_view.display_dex_trades

```python
def l) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L21)

Description: Trades on Decentralized Exchanges aggregated by DEX or Month

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| kind | str | Aggregate trades by dex or time | None | False |
| trade_amount_currency | str | Currency of displayed trade amount. Default: USD | USD | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| days | int | Last n days to query data. Maximum 365 (bigger numbers can cause timeouts
on server side) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

