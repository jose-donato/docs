---
title: holdv
description: Display holdings of assets (absolute value)
---
# holdv

## portfolio_view.display_holdings_value

```python
def holdv(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, unstack: bool, raw: bool, limit: int, export: str, external_axes: Union[matplotlib.axes._axes.Axes, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L625)

Description: Display holdings of assets (absolute value)

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| unstack | bool | Individual assets over time | None | False |
| raw | bool | To display raw data | None | False |
| limit | int | Number of past market days to display holdings | None | False |
| export | str | Format to export plot | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

None

## Examples

