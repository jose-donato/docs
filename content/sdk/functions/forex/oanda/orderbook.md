---
title: orderbook
description: OpenBB SDK Function
---
# orderbook

## forex_oanda_model.orderbook_plot_data_request

```python
def orderbook(instrument: Union[str, NoneType], accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L136)

Description: Request order book data for plotting.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Order book data or False |

## Examples




# VIEW

# orderbook

## forex_oanda_view.get_order_book

```python
def orderboo) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L79)

Description: Plot the orderbook for the instrument if Oanda provides one.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

