---
title: screener_output
description: Print the output of screener
---
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

