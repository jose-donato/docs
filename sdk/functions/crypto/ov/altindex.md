# altindex

## crypto_ov_blockchaincenter_model.get_altcoin_index

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/blockchaincenter_model.py#L18)

Description: Get altcoin index overtime

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| period | int | Number of days {30,90,365} to check performance of coins and calculate the altcoin index.
E.g., 365 checks yearly performance, 90 will check seasonal performance (90 days),
30 will check monthly performance (30 days). | None | False |
| start_date | int | Initial date timestamp (e.g., 1_609_459_200) | None | False |
| end_date | int | End date timestamp (e.g., 1_641_588_030) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Date, Value (Altcoin Index) |

## Examples

