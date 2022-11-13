---
title: spectrum
description: OpenBB SDK Function
---
# spectrum

## economy_finviz_model.get_spectrum_data

```python
def spectrum(group: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L167)

Description: Get group (sectors, industry or country) valuation/performance data. [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | None | False |

## Returns

None

## Examples




# VIEW

# spectrum

## economy_finviz_view.display_spectrum

```python
def spectrum(group: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_view.py#L111)

Description: Display finviz spectrum in system viewer [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples
