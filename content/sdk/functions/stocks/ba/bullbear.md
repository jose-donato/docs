---
title: bullbear
description: OpenBB SDK Function
---
# bullbear

## stocks_ba_stocktwits_model.get_bullbear

```python
def bullbear(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L15)

Description: Gets bullbear sentiment for ticker [Source: stocktwits]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to look at | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| int | Watchlist count |

## Examples




# VIEW

# bullbear

## stocks_ba_stocktwits_view.display_bullbear

```python
def bullbear(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_view.py#L14)

Description: Print bullbear sentiment based on last 30 messages on the board.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

None

## Examples

