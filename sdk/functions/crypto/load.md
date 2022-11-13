# load

## crypto_helpers.load

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/cryptocurrency_helpers.py#L473)

Description: Load crypto currency to get data for

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to get | None | False |
| start_date | datetime | The datetime to start at | None | False |
| interval | str | The interval between data points in minutes.
Choose from: 1, 15, 30, 60, 240, 1440, 10080, 43200 | None | False |
| exchange | str: | The exchange to get data from. | None | False |
| vs_currency | str | Quote Currency (Defaults to usdt) | None | False |
| end_date | datetime | The datetime to end at | None | False |
| source | str | The source of the data
Choose from: CCXT, CoinGecko, YahooFinance | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe consisting of price and volume data |

## Examples

