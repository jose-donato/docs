# gov_proposals

## crypto_defi_terramoney_fcd_model.get_proposals

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L195)

Description: Get terra blockchain governance proposals list [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| status | str | status of proposal, one from list: ['Voting','Deposit','Passed','Rejected'] | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| limit | int | Number of records to display | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Terra blockchain governance proposals list |

## Examples

