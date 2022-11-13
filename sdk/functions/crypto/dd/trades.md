# trades

## crypto_dd_coinbase_model.get_trades

```python
def get_stars_history(repo: str):
```

[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L100)

Description: Get last N trades for chosen trading pair. [Source: Coinbase]

## Parameters

| Name   | Type | Description                                                                                  | Default | Optional |
| ------ | ---- | -------------------------------------------------------------------------------------------- | ------- | -------- |
| symbol | str  | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH                                    | None    | False    |
| limit  | int  | Last `limit` of trades. Maximum is 1000.                                                     | None    | False    |
| side   | str  | You can chose either sell or buy side. If side is not set then all trades will be displayed. | None    | False    |

## Returns

| Type         | Description                             |
| ------------ | --------------------------------------- |
| pd.DataFrame | Last N trades for chosen trading pairs. |

## Examples
