# arkord

## stocks_disc_ark_model.get_ark_orders

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/ark_model.py#L22)

Description: Returns ARK orders in a Dataframe

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| buys_only | bool | Flag to filter on buys only | None | False |
| sells_only | bool | Flag to sort on sells only | None | False |
| fund | str | Optional filter by fund | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame | ARK orders data frame with the following columns:
ticker, date, shares, weight, fund, direction |

## Examples

