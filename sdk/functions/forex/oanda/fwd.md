---
title: fwd
description: OpenBB SDK Function
---
# fwd

## forex_fxempire_model.get_forward_rates

```python
def fwd(to_symbol: str, from_symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/fxempire_model.py#L13)

Description: Gets forward rates from fxempire

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To currency | None | False |
| from_symbol | str | From currency | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | None |

## Examples




# VIEW

# fwd

## forex_fxempire_view.display_forward_rates

```python
def fwd(to_symbol: str, from_symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/fxempire_view.py#L13)

Description: Display forward rates for currency pairs

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To currency | None | False |
| from_symbol | str | From currency | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

