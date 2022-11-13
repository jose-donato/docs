---
title: grhist
description: Get histoical option greeks
---
# grhist

## stocks_options_screen_syncretism_model.get_historical_greeks

```python
def grhist(symbol: str, expiry: str, strike: Union[str, float], chain_id: str, put: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_model.py#L36)

Description: Get histoical option greeks

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration date | None | False |
| strike | Union[str, float] | Strike price to look for | None | False |
| chain_id | str | OCC option symbol.  Overwrites other inputs | None | False |
| put | bool | Is this a put option? | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing historical greeks |

## Examples

