---
title: wfpe
description: OpenBB SDK Function
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




# VIEW

# wfpe

## crypto_ov_withdrawalfees_view.display_crypto_withdrawal_fees

```python
def wfpe(symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L85)

Description: Coin withdrawal fees per exchange

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Coin to check withdrawal fees | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

