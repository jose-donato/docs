# mkt

## crypto_dd_coinpaprika_model.get_coin_markets_by_id

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L186)

Description: All markets for given coin and currency [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin Parpika identifier of coin e.g. eth-ethereum | None | False |
| quotes | str | Comma separated list of quotes to return.
Example: quotes=USD,BTC
Allowed values:
BTC, ETH, USD, EUR, PLN, KRW, GBP, CAD, JPY, RUB, TRY, NZD, AUD, CHF, UAH, HKD, SGD, NGN,
PHP, MXN, BRL, THB, CLP, CNY, CZK, DKK, HUF, IDR, ILS, INR, MYR, NOK, PKR, SEK, TWD, ZAR,
VND, BOB, COP, PEN, ARS, ISK | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:
https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | All markets for given coin and currency |

## Examples

