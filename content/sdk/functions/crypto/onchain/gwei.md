---
title: gwei
description: OpenBB SDK Function
---
# gwei

## crypto_onchain_ethgasstation_model.get_gwei_fees

```python
def gwe) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_model.py#L12)

Description: Returns the most recent Ethereum gas fees in gwei

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | four gas fees and durations
    (fees for slow, average, fast and
    fastest transactions in gwei and
    its average durations in seconds) |

## Examples




# VIEW

# gwei

## crypto_onchain_ethgasstation_view.display_gwei_fees

```python
def gwei(export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_view.py#L13)

Description: Current gwei fees

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

