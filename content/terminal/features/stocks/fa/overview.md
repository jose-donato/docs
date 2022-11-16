---
title: overview
description: OpenBB Terminal Function
---

# Fundamental Analysis

## overview

### Description: 

Prints an overview about the company. The following fields are expected: Symbol, Asset type, Name, Description, Exchange, Currency, Country, Sector, Industry, Address, Full time employees, Fiscal year end, Latest quarter, Market capitalization, EBITDA, PE ratio, PEG ratio, Book value, Dividend per share, Dividend yield, EPS, Revenue per share TTM, Profit margin, Operating margin TTM, Return on assets TTM, Return on equity TTM, Revenue TTM, Gross profit TTM, Diluted EPS TTM, Quarterly earnings growth YOY, Quarterly revenue growth YOY, Analyst target price, Trailing PE, Forward PE, Price to sales ratio TTM, Price to book ratio, EV to revenue, EV to EBITDA, Beta, 52 week high, 52 week low, 50 day moving average, 200 day moving average, Shares outstanding, Shares float, Shares short, Shares short prior month, Short ratio, Short percent outstanding, Short percent float, Percent insiders, Percent institutions, Forward annual dividend rate, Forward annual dividend yield, Payout ratio, Dividend date, Ex dividend date, Last split factor, and Last split date. Also, the C i k field corresponds to Central Index Key, which can be used to search a company on https://www.sec.gov/edgar/searchedgar/cik.htm [Source: Alpha Vantage]

### Usage: 
```python
usage: overview
```



## Examples

```python

2022 Feb 16, 07:03 (✨) /stocks/fa/ $ overview
                              TSLA Overview
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                               ┃                                       ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Symbol                        │ TSLA                                  │
├───────────────────────────────┼───────────────────────────────────────┤
│ Asset type                    │ Common Stock                          │
├───────────────────────────────┼───────────────────────────────────────┤
│ Name                          │ Tesla Inc                             │
├───────────────────────────────┼───────────────────────────────────────┤
│ C i k                         │ 1318605                               │
├───────────────────────────────┼───────────────────────────────────────┤
│ Exchange                      │ NASDAQ                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ Currency                      │ USD                                   │
├───────────────────────────────┼───────────────────────────────────────┤
│ Country                       │ USA                                   │
├───────────────────────────────┼───────────────────────────────────────┤
│ Sector                        │ MANUFACTURING                         │
├───────────────────────────────┼───────────────────────────────────────┤
│ Industry                      │ MOTOR VEHICLES & PASSENGER CAR BODIES │
├───────────────────────────────┼───────────────────────────────────────┤
│ Address                       │ 3500 DEER CREEK RD, PALO ALTO, CA, US │
├───────────────────────────────┼───────────────────────────────────────┤
│ Fiscal year end               │ December                              │
├───────────────────────────────┼───────────────────────────────────────┤
│ Latest quarter                │ 2021-12-31                            │
├───────────────────────────────┼───────────────────────────────────────┤
│ Market capitalization         │ 953.341 B                             │
├───────────────────────────────┼───────────────────────────────────────┤
│ EBITDA                        │ 9.333 B                               │
├───────────────────────────────┼───────────────────────────────────────┤
│ PE ratio                      │ 188.21                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ PEG ratio                     │ 2.587                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Book value                    │ 29.23                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Dividend per share            │ 0                                     │
├───────────────────────────────┼───────────────────────────────────────┤
│ Dividend yield                │ 0                                     │
├───────────────────────────────┼───────────────────────────────────────┤
│ EPS                           │ 4.901                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Revenue per share TTM         │ 54.59                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Profit margin                 │ 0.102                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Operating margin TTM          │ 0.121                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Return on assets TTM          │ 0.0714                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ Return on equity TTM          │ 0.204                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Revenue TTM                   │ 53.823 B                              │
├───────────────────────────────┼───────────────────────────────────────┤
│ Gross profit TTM              │ 13.606 B                              │
├───────────────────────────────┼───────────────────────────────────────┤
│ Diluted EPS TTM               │ 4.901                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Quarterly earnings growth YOY │ 7.54                                  │
├───────────────────────────────┼───────────────────────────────────────┤
│ Quarterly revenue growth YOY  │ 0.649                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Analyst target price          │ 965.99                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ Trailing PE                   │ 188.21                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ Forward PE                    │ 88.5                                  │
├───────────────────────────────┼───────────────────────────────────────┤
│ Price to sales ratio TTM      │ 17.71                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Price to book ratio           │ 29.98                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ EV to revenue                 │ 16.65                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ EV to EBITDA                  │ 93.12                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ Beta                          │ 2.006                                 │
├───────────────────────────────┼───────────────────────────────────────┤
│ 52 week high                  │ 1243.49                               │
├───────────────────────────────┼───────────────────────────────────────┤
│ 52 week low                   │ 539.49                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ 50 day moving average         │ 989.85                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ 200 day moving average        │ 824.84                                │
├───────────────────────────────┼───────────────────────────────────────┤
│ Shares outstanding            │ 1.034 B                               │
├───────────────────────────────┼───────────────────────────────────────┤
│ Dividend date                 │ None                                  │
├───────────────────────────────┼───────────────────────────────────────┤
│ Ex dividend date              │ None                                  │
└───────────────────────────────┴───────────────────────────────────────┘

```

