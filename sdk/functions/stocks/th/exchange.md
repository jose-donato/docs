---
title: exchange
description: OpenBB SDK Function
---
# exchange

## stocks_th_bursa_model.get_bursa

```python
def exchange(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L19)

Description: Get current exchange open hours.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Exchange symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Exchange info |

## Examples




# VIEW

# exchange

## stocks_th_bursa_view.display_exchange

```python
def exchange(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L14)

Description: Display current exchange trading hours.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Exchange symbol | None | False |

## Returns

None

## Examples

