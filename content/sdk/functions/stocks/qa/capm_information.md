---
title: capm_information
description: OpenBB SDK Function
---

# capm_information

## openbb_terminal.stocks.quantitative_analysis.factors_model.capm_information

```python title='openbb_terminal/stocks/quantitative_analysis/factors_model.py'
def capm_information(symbol: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/quantitative_analysis/factors_model.py#L80)

Description: Provides information that relates to the CAPM model

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | A ticker symbol in string form | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[float, float] | The beta for a stock, The systematic risk for a stock |

## Examples

