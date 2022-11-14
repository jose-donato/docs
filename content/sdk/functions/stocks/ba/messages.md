---
title: messages
description: OpenBB SDK Function
---
# messages

## stocks_ba_stocktwits_model.get_messages

```python
def messages(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_model.py#L54)

Description: Get last messages for a given ticker [Source: stocktwits]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of messages to get | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of messages |

## Examples




# VIEW

# messages

## stocks_ba_stocktwits_view.display_messages

```python
def messages(symbol: str, limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/stocktwits_view.py#L36)

Description: Print up to 30 of the last messages on the board. [Source: Stocktwits]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of messages to get | None | False |

## Returns

None

## Examples

