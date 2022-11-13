---
title: finviz_peers
description: Get similar companies from Finviz
---
# finviz_peers

## stocks_ca_finviz_compare_model.get_similar_companies

```python
def finviz_peers(symbol: str, compare_list: List[str]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finviz_compare_model.py#L24)

Description: Get similar companies from Finviz

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to find comparisons for | None | False |
| compare_list | List[str] | List of fields to compare, ["Sector", "Industry", "Country"] | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[str] | List of similar companies |

## Examples

