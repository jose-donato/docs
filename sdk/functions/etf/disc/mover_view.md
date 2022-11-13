---
title: mover
description: Show top ETF movers from wsj.com
---
# mover

## etf_disc_wsj_view.show_top_mover

```python
def mover(sort_type: str, limit: int, export: Any) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/discovery/wsj_view.py#L15)

Description: Show top ETF movers from wsj.com

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_type | str | What to show. Either Gainers, Decliners or Activity | None | False |
| limit | int | Number of etfs to show | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

