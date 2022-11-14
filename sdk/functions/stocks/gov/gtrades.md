---
title: gtrades
description: OpenBB SDK Function
---
# gtrades

## stocks_gov_quiverquant_model.get_cleaned_government_trading

```python
def gtrades(symbol: str, gov_type: str, past_transactions_months: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L416)

Description: Government trading for specific ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get congress trading data from | None | False |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get transactions for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of tickers government trading |

## Examples




# VIEW

# gtrades

## stocks_gov_quiverquant_view.display_government_trading

```python
def gtrades(symbol: str, gov_type: str, past_transactions_months: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L330)

Description: Government trading for specific ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get congress trading data from | None | False |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get transactions for | None | False |
| raw | bool | Show raw output of trades | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

