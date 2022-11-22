---
title: Due Diligence
keywords:
  [
    "stocks", "stock", "options", "option", "call", "put"
  ]
excerpt: "This guide introduces the Stocks menu in the context of the OpenBB SDK."
---

The DD module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering `.`, after, `openbb.dd`
​

## How to Use

​The examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:
​

```python
from openbb_terminal.sdk import openbb
```

​Below is a brief description of each function within the DD module:

|Path |Type |Description |
|:-------------------|:--------:|------------------------------------------:|
|openbb.dd.analyst   | Function | Analyst Prices and Ratings of the Company |
|openbb.dd.arktrades | Function |                 Get ARK Trades for Ticker |
|openbb.dd.rating    | Function |                  Rating over time (daily) |
|openbb.dd.rot       | Function | Analysis Rating Count Over Time (monthly) |
|openbb.dd.supplier  | Function |                         List of Suppliers |
|openbb.dd.customer  | Function |                         List of Customers |
|openbb.dd.est       | Function |                Analyst Earnings Estimates |
|openbb.dd.news      | Function |                          Most recent news |
|openbb.dd.sec       | Function |                               SEC filings |
|openbb.dd.pt        | Function |                   Price Targets Over Time |

Alteratively you can print the contents of the DD SDK with:
​

```python
help(openbb.dd)
```

## Examples

### analyst

​
Creates a table of current ratings from different analysts for a given ticker
​

```python
openbb.stocks.dd.analyst("AAPL")
```

| date       | category   | analyst                 | rating     |   target_from |   target_to |
|:-----------|:-----------|:------------------------|:-----------|--------------:|------------:|
| 2022-10-28 | Reiterated | Wedbush                 | Outperform |           220 |         200 |
| 2022-10-28 | Reiterated | Robert W. Baird         | Outperform |           185 |         170 |
| 2022-10-28 | Reiterated | KeyBanc Capital Markets | Overweight |           185 |         177 |
| 2022-10-28 | Reiterated | Deutsche Bank           | Buy        |           175 |         170 |
| 2022-10-28 | Reiterated | DA Davidson             | Buy        |           185 |         167 |

### rot

Generates a table with counts of analyst ratings over time

```python
openbb.stocks.dd.rot("AAPL")
```

|    |   buy |   hold | period     |   sell |   strongBuy |   strongSell | symbol   |
|---:|------:|-------:|:-----------|-------:|------------:|-------------:|:---------|
|  0 |    29 |      6 | 2022-11-01 |      1 |          14 |            0 | AAPL     |
|  1 |    29 |      6 | 2022-10-01 |      1 |          14 |            0 | AAPL     |
|  2 |    29 |      7 | 2022-09-01 |      1 |          16 |            0 | AAPL     |
|  3 |    27 |      9 | 2022-08-01 |      1 |          17 |            0 | AAPL     |


### pt

Creates a table with price targets over time for a ticker

```python
openbb.stocks.dd.pt("AAPL")
```

| Date                | Company                        | Rating   |   Price Target |
|:--------------------|:-------------------------------|:---------|---------------:|
| 2021-01-05 00:00:00 | Capital Depesche               | BUY      |            150 |
| 2021-01-14 00:00:00 | Barclays Capital               | HOLD     |            116 |
| 2021-01-21 00:00:00 | Morgan Stanley                 | BUY      |            152 |
| 2021-01-22 00:00:00 | Cowen and Company, LLC         | BUY      |            153 |
| 2021-01-25 00:00:00 | Raymond James Financial, Inc.  | BUY      |            150 |
| 2021-01-25 00:00:00 | Wedbush Morgan Securities Inc. | BUY      |            175 |
| 2021-01-25 00:00:00 | Evercore                       | BUY      |            160 |
| 2021-01-26 00:00:00 | Cascend Securities             | BUY      |            170 |
| 2021-01-28 00:00:00 | Morgan Stanley                 | BUY      |            164 |
| 2021-01-28 00:00:00 | D.A. Davidson & Co.            | BUY      |            167 |
| 2021-01-28 00:00:00 | Deutsche Bank                  | BUY      |            160 |
| 2021-01-28 00:00:00 | Wells Fargo & Co               | BUY      |            160 |
| 2021-01-28 00:00:00 | Piper Sandler                  | BUY      |            160 |
| 2021-01-28 00:00:00 | Bernstein                      | HOLD     |            132 |
| 2021-01-28 00:00:00 | Credit Suisse                  | HOLD     |            140 |
| 2021-01-28 00:00:00 | Capital Depesche               | BUY      |            155 |
| 2021-01-28 00:00:00 | Raymond James Financial, Inc.  | BUY      |            160 |
| 2021-01-28 00:00:00 | Needham & Company, LLC         | BUY      |            170 |
| 2021-03-10 00:00:00 | Wedbush Morgan Securities Inc. | BUY      |            175 |
| 2021-03-16 00:00:00 | Evercore                       | BUY      |            175 |
| 2021-03-31 00:00:00 | UBS                            | BUY      |            142 |
| 2021-04-06 00:00:00 | Morgan Stanley                 | BUY      |            156 |
| 2021-04-16 00:00:00 | Morgan Stanley                 | BUY      |            157 |
| 2021-04-21 00:00:00 | Morgan Stanley                 | BUY      |            158 |
| 2021-04-29 00:00:00 | Raymond James Financial, Inc.  | BUY      |            185 |
| 2021-04-29 00:00:00 | Goldman Sachs                  | HOLD     |            130 |
| 2021-04-29 00:00:00 | Credit Suisse                  | HOLD     |            150 |
| 2021-04-29 00:00:00 | Capital Depesche               | BUY      |            165 |
| 2021-04-29 00:00:00 | Jefferies & Company Inc.       | BUY      |            175 |
| 2021-04-29 00:00:00 | Wedbush Morgan Securities Inc. | BUY      |            185 |
| 2021-04-29 00:00:00 | Morgan Stanley                 | BUY      |            161 |
| 2021-05-28 00:00:00 | New Street Research            | SELL     |             90 |
| 2021-06-24 00:00:00 | Morgan Stanley                 | BUY      |            162 |
| 2021-07-06 00:00:00 | J.P. Morgan                    | BUY      |            170 |
| 2021-07-14 00:00:00 | J.P. Morgan                    | BUY      |            175 |
| 2021-07-15 00:00:00 | Morgan Stanley                 | BUY      |            166 |
