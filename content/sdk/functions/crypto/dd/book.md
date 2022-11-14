---
title: book
description: OpenBB SDK Function
---
# book

## crypto_dd_binance_model.get_order_book

```python
def boo) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L138)

Description: Get order book for currency. [Source: Binance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol | None | False |
| limit | int | Limit parameter. Adjusts the weight | None | False |
| to_symbol | str | Quote currency (what to view coin vs) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing orderbook |

## Examples




# VIEW

# book

## crypto_dd_binance_view.display_order_book

```python
def book(from_symbol: str, limit: int, to_symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_view.py#L23)

Description: Get order book for currency. [Source: Binance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol | None | False |
| limit | int | Limit parameter. Adjusts the weight | None | False |
| to_symbol | str | Quote currency (what to view coin vs) | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | False |

## Returns

None

## Examples

