---
title: twitter
description: Get twitter timeline for given coin id. Not more than last 50 tweets [Source: CoinPaprika]
---
# twitter

## crypto_dd_coinpaprika_model.get_coin_twitter_timeline

```python
def twitter(symbol: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L41)

Description: Get twitter timeline for given coin id. Not more than last 50 tweets [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | id of coin from coinpaprika e.g. Ethereum - > 'eth-ethereum' | None | False |
| sortby | str | Key by which to sort data. Every column name is valid
(see for possible values:
https://api.coinpaprika.com/docs#tag/Coins/paths/~1coins~1%7Bcoin_id%7D~1twitter/get). | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Twitter timeline for given coin.
Columns: date, user_name, status, retweet_count, like_count |

## Examples

