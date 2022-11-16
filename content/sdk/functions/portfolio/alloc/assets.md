---
title: assets
description: OpenBB SDK Function
---

# assets

## openbb_terminal.portfolio.portfolio_model.get_assets_allocation

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_assets_allocation(portfolio_engine: portfolio_model.PortfolioEngine, tables: bool, limit: int, recalculate: bool) -> Union
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2493)

Description: Display portfolio asset allocation compared to the benchmark

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| tables | bool | Whether to include separate allocation tables | None | False |
| limit | int | The amount of assets you wish to show, by default this is set to 10 | this | False |
| recalculate | bool | Flag to force recalculate allocation if already exists | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]] | DataFrame with combined allocation plus individual allocation if tables is `True`. |

## Examples

