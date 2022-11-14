---
title: chains_tr
description: OpenBB SDK Function
---
# chains_tr

## stocks_options_tradier_model.get_option_chains

```python
def chains_t) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L153)

Description: Display option chains [Source: Tradier]"

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get options for | None | False |
| expiry | str | Expiration date in the form of "YYYY-MM-DD" | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with options for the given Symbol and Expiration date |

## Examples




# VIEW

# chains_tr

## stocks_options_tradier_view.display_chains

```python
def chains_tr(symbol: str, expiry: str, to_display: List[str], min_sp: float, max_sp: float, calls_only: bool, puts_only: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/tradier_view.py#L154)

Description: Display option chain

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Expiration date of option | None | False |
| to_display | List[str] | List of columns to display | None | False |
| min_sp | float | Min strike price to display | None | False |
| max_sp | float | Max strike price to display | None | False |
| calls_only | bool | Only display calls | None | False |
| puts_only | bool | Only display puts | None | False |
| export | str | Format to  export file | None | False |

## Returns

None

## Examples

