---
title: cmctop
description: Shows top n coins. [Source: CoinMarketCap]
---
# cmctop

## crypto_disc_coinmarketcap_view.display_cmc_top_coins

```python
def cmcto) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L16)

Description: Shows top n coins. [Source: CoinMarketCap]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to
Coin Market Cap:s API documentation, see:
https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

