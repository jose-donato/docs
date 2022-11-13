# ueat

## crypto_onchain_bitquery_model.get_ethereum_unique_senders

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L583)

Description: Get number of unique ethereum addresses which made a transaction in given time interval.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time interval in which count unique ethereum addresses which made transaction. day,
month or week. | None | False |
| limit | int | Number of records for data query. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Unique ethereum addresses which made a transaction |

## Examples

