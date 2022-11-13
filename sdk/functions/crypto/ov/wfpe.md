---
title: wfpe
description: Scrapes coin withdrawal fees per exchange
---
# wfpe

## crypto_ov_withdrawalfees_model.get_crypto_withdrawal_fees

```python
def wfpe(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L208)

Description: Scrapes coin withdrawal fees per exchange

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to check withdrawal fees. By default bitcoin | bitcoin | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | - str:              Overall statistics (exchanges, lowest, average and median)
- pandas.DataFrame: Exchange, Withdrawal Fee, Minimum Withdrawal Amount |

## Examples

