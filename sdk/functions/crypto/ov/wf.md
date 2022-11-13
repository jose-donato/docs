---
title: wf
description: OpenBB SDK Function
---
# wf

## crypto_ov_withdrawalfees_model.get_overall_withdrawal_fees

```python
def wf(limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L119)

Description: Scrapes top coins withdrawal fees

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of coins to search, by default n=100, one page has 100 coins, so 1 page is scraped. | n | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Coin, Lowest, Average, Median, Highest, Exchanges Compared |

## Examples




# VIEW

# wf

## crypto_ov_withdrawalfees_view.display_overall_withdrawal_fees

```python
def wf(limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L17)

Description: Top coins withdrawal fees

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of coins to search | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples
