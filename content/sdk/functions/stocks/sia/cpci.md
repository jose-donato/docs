---
title: cpci
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpci

<Tabs>
<TabItem value="model" label="Model" default>

Get number of companies per country in a specific industry (and specific market cap).

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L411)

```python
def get_companies_per_country_in_industry(industry: str, mktcap: str, exclude_exchanges: bool) -> dict
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| industry | str | Select industry to get number of companies by each country | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of countries and number of companies in a specific sector |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display number of companies per country in a specific industry. [Source: Finance Database]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_view.py#L818)

```python
def display_companies_per_country_in_industry(industry: str, mktcap: str, exclude_exchanges: bool, export: str, raw: bool, max_countries_to_display: int, min_pct_to_display_country: float, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| industry | str | Select industry to get number of companies by each country | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |
| export | str | Format to export data as | None | False |
| raw | bool | Output all raw data | None | False |
| max_countries_to_display | int | Maximum number of countries to display | None | False |
| min_pct_to_display_country | float | Minimum percentage to display country | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>