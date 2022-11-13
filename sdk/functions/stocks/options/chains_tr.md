---
title: chains_tr
description: Display option chains [Source: Tradier]"
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

