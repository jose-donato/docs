# cpcontracts

## crypto_ov_coinpaprika_model.get_contract_platform

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L418)

Description: Gets all contract addresses for given platform [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| platform_id | str | Blockchain platform like eth-ethereum | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascend | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | id, type, active |

## Examples

