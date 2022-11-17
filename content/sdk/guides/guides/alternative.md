---
title: Alternative
keywords: ['alts']
excerpt: "Alternative Menus in the OpenBB Terminal"

---

Investors utilize alternative data to analyze a company or investment that is not available through typical data sources (financial statements, SEC filings, management presentations, press releases, etc.). Traditional data sources do not provide investors with as accurate, timely, or granular insights and measurements into corporate performance as alternative data does. Increases in computing power and personal device usage have resulted in tremendous data production during the previous ten years. As a result, a slew of new businesses have sprung up to collect, clean, analyze, and interpret data in order to sell it as a product that might help investors make better decisions.

The Alternative module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering `.`, after, `openbb.alt`

A brief description below highlights the main Functions and Modules available in the ETF SDK

## How to Use
​
The examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:
​
```python
from openbb_terminal.sdk import openbb
import pandas as pd
```


A brief description below highlights the main Functions and Modules available in the Alternative SDK
### Covid

|Path |Type | Description |
| :--------- | :---------: | ----------: |
|openbb.alt.covid.global_deaths |Function |historical deaths for given country |
|openbb.alt.covid.slopes |Function |Load cases and find slope over period |
|openbb.alt.covid.stat |Function |Show historical cases and deaths by country |
|openbb.alt.covid.global_cases |Function |historical cases for given country |
|openbb.alt.covid.ov |Function | overview historical cases and deaths by country |

### OSS

|Path |Type | Description |
| :--------- | :---------: | ----------: |
|openbb.alt.oss.top |Function |Get top repositories |
|openbb.alt.oss.search |Function |Search repositories |
|openbb.alt.oss.history |Function |Display a repo star history |
|openbb.alt.oss.ross |Function |Startups from ross index |
|openbb.alt.oss.github_data |Function |Get repository stats |
|openbb.alt.oss.summary |Function |Get repository summary |

Alteratively you can print the contents of the ETF SDK with:
​
```python
help(openbb.alt.covid)
help(openbb.alt.oss)
```

## Examples - OSS



:::note

To use some of the OSS SDK commands you will need a GitHub API key - you can get one [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


:::
### alt.oss.top
​
The alt.oss.top SDK command lets you display top repositories
​
```python
etf_list = pd.DataFrame.from_dict(openbb.alt.oss.top()).transpose()
categories = list(etf_list['category'].drop_duplicates())
categories = pd.DataFrame(categories[1::], columns = ['Type'])
​
categories.head(6)
```

### alt.oss.summary

The alt.oss.summary SDK command lets you display top repositories

```python
summary = pd.DataFrame.from_dict(openbb.alt.oss.summary(repo="openbb-finance/openbbterminal"))
print(summary)
```

|Metric |Value |
| :--------- | ---------: |
| Name       | OpenBBTerminal |
| Owner       | OpenBB-finance |
| Creation Date       | 2020-12-20 |
| Last Update       | 2022-11-17 |
| Topics       | artificial-intelligence, crypto, cryptocurrenc... |
| Stars       | 17643 |
| Forks       | 1849 |
| Open Issues       | 152 |
| Language       | Python |
| License       | MIT License |
| Releases       |  10 |
| Last Release Downloads       | 10201 |
​
