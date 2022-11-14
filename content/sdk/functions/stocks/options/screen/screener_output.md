---
title: screener_output
description: OpenBB SDK Function
---
# screener_output

## stocks_options_screen_syncretism_model.get_screener_output

```python
def screener_output(preset: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_model.py#L158)

Description: Screen options based on preset filters

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Chosen preset | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with screener data, or empty if errors |

## Examples




# VIEW

# screener_output

## stocks_options_screen_syncretism_view.view_screener_output

```python
def screener_output(preset: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_view.py#L58)

Description: Print the output of screener

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset | str | Chosen preset | None | False |
| limit | int | Number of randomly sorted rows to display | None | False |
| export | str | Format for export file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List | List of tickers screened |

## Examples

