---
title: ueat
description: Display number of unique ethereum addresses which made a transaction in given time interval
---
# ueat

## crypto_onchain_bitquery_view.display_ethereum_unique_senders

```python
def uea) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L223)

Description: Display number of unique ethereum addresses which made a transaction in given time interval

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time interval in which ethereum address made transaction. month, week or day | None | False |
| limit | int | Number of records to display. It's calculated base on provided interval.
If interval is month then calculation is made in the way: limit * 30 = time period,
in case if interval is set to week, then time period is calculated as limit * 7.
For better user experience maximum time period in days is equal to 90. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Number of unique ethereum addresses which made a transaction in given time interval |

## Examples

