---
title: trades
description: Display last N trades for chosen trading pair. [Source: Coinbase]
---
# trades

## crypto_dd_coinbase_view.display_trades

```python
def trades(symbol: str, limit: int, side: Union[str, NoneType], export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_view.py#L50)

Description: Display last N trades for chosen trading pair. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |
| limit | int | Last <limit> of trades. Maximum is 1000. | None | False |
| side | Optional[str] | You can chose either sell or buy side. If side is not set then all trades will be displayed. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

