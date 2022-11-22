---
title: Introduction to Economy
keywords: ['economy', 'macro', 'index', 'treasury', 'fred', 'market']
excerpt: "The Introduction to Economy explains how to use the 
menu and provides a brief description of its sub-menus"

---

The Economy menu enables you to obtain market overviews
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/overview/" target="_blank">overview</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/futures/" target="_blank">futures</a>),
see yield curves of any country
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/ycrv/" target="_blank">ycrv</a>)
and discover sector, industry and country performance
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/performance/" target="_blank">performance</a>).
Next to that, the databases of
<a href="https://www.econdb.com/" target="_blank">EconDB</a>,
<a href="https://fred.stlouisfed.org/" target="_blank">FRED</a> and
<a href="https://finance.yahoo.com/" target="_blank">Yahoo Finance</a> can be
accessed via
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/macro/" target="_blank">macro</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/fred/" target="_blank">fred</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/index/" target="_blank">index</a>
respectively. All of this can also be further analysed with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Forecasting
menu</a> (`forecast`) and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/qa/" target="_blank">Quantitative
Techniques</a> (`qa`).

## How to use

The Economy menu is called upon by typing `economy` which opens the following
menu:

![Economy Menu](https://user-images.githubusercontent.com/46355364/176679746-21b28263-96be-4701-9fd1-8657602e0214.png)

Within the Economy menu you have a variety of options ranging from treasury
rates to population growth to country financial performance. As this is quite
extensive, the guide has two sections. The first section will discuss valuations
and performance and the second section discusses the databases.

### Performance and valuations

By using
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/overview/" target="_blank">overview</a>
we can look into market overviews from the perspective of indices (`indices`),
bonds (`usbonds` and `glbonds`), currencies (`currencies`) and in general. E.g.
let's look at global bond performance by adding the `-t` argument:

```
2022 Jun 29, 09:56 (🦋) /economy/ $ overview -t glbonds

                              Global Bonds
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━┓
┃                                   ┃ Rate (%) ┃ Yld (%) ┃ Yld Chg (%) ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━┩
│ U.S. 10 Year Treasury Note        │ 2.875    │ 3.164   │ -0.016      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Germany 10 Year Government Bond   │ 0.000    │ 1.582   │ -0.046      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ U.K. 10 Year Gilt                 │ 4.250    │ 2.440   │ -0.028      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Japan 10 Year Government Bond     │ 0.200    │ 0.232   │ -0.002      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Australia 10 Year Government Bond │ 1.000    │ 3.703   │ -0.041      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ China 10 Year Government Bond     │ 2.760    │ 2.851   │ -0.010      │
└───────────────────────────────────┴──────────┴─────────┴─────────────┘
```

Next to that, to better understand the current commodity market we can look into
the
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/futures/" target="_blank">futures</a>
of a variety of commodities. For example, let's look at a general overview:

```
2022 Jun 29, 09:58 (🦋) /economy/ $ futures

     Futures/Commodities [Source: Wall St. Journal]
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┓
┃                           ┃ Price   ┃ Chg     ┃ %Chg  ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━┩
│ Crude Oil Futures         │ 113.10  │ 1.34    │ 1.20  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Brent Crude Futures       │ 115.24  │ 1.44    │ 1.27  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Gold Futures              │ 1823.50 │ 2.30    │ 0.13  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Silver Futures            │ 20.690  │ -0.116  │ -0.56 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Natural Gas Futures       │ 6.738   │ 0.187   │ 2.85  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Unleaded Gasoline Futures │ 3.8239  │ -0.0203 │ -0.53 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Copper Futures            │ 3.7905  │ 0.0105  │ 0.28  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Corn Futures              │ 653.75  │ -5.50   │ -0.83 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Wheat Futures             │ 938.25  │ 2.25    │ 0.24  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Bloomberg Commodity Index │ 123.95  │ 1.25    │ 1.02  │
└───────────────────────────┴─────────┴─────────┴───────┘
```

Furthermore, we can look into yield curves of any country, by default this is
set to the United States, but it can be any:

![Yield Curves Options Menu](https://user-images.githubusercontent.com/46355364/176679828-bd90df8c-bff3-42a7-8e03-897c0be99443.png)

Which then returns the following plot:

![Yield Curve](https://user-images.githubusercontent.com/46355364/176679949-dd8b5b47-1125-4b1c-9558-25f1d2d70ffc.png)

Lastly, we can also show industry, sector and country performance with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/performance/" target="_blank">performance</a>.
For example, looking at the `sectors` returns the following:

```
2022 Jun 29, 10:03 (🦋) /economy/ $ performance -g sector

                                                         Group Performance Data
┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━┓
┃ Name                   ┃ Week  ┃ Month ┃ 3Month ┃ 6Month ┃ 1Year ┃ YTD   ┃ Recom ┃ AvgVolume [1M] ┃ RelVolume ┃ Change ┃ Volume [1M] ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━┩
│ Utilities              │ 0.04  │ -0.08 │ -0.07  │ -0.03  │ 0.06  │ -0.04 │ 2.37  │ 171.85         │ 0.50      │ -0.00  │ 8.05        │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Technology             │ 0.01  │ -0.10 │ -0.25  │ -0.31  │ -0.22 │ -0.31 │ 2.00  │ 1660.00        │ 1.08      │ -0.01  │ 168.13      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Real Estate            │ 0.01  │ -0.06 │ -0.15  │ -0.21  │ -0.24 │ -0.22 │ 2.21  │ 396.36         │ 0.68      │ -0.02  │ 25.29       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Industrials            │ 0.01  │ -0.09 │ -0.18  │ -0.20  │ -0.17 │ -0.20 │ 2.26  │ 656.49         │ 0.99      │ -0.01  │ 61.12       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Healthcare             │ 0.03  │ -0.04 │ -0.10  │ -0.14  │ -0.12 │ -0.14 │ 2.07  │ 1530.00        │ 3.02      │ -0.00  │ 434.03      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Financial              │ 0.01  │ -0.10 │ -0.19  │ -0.18  │ -0.16 │ -0.17 │ 2.26  │ 1010.00        │ 0.67      │ -0.00  │ 63.28       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Energy                 │ 0.04  │ -0.12 │ -0.03  │ 0.24   │ 0.29  │ 0.26  │ 2.21  │ 851.32         │ 0.82      │ 0.00   │ 65.35       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Consumer Defensive     │ 0.02  │ -0.04 │ -0.08  │ -0.08  │ -0.05 │ -0.09 │ 2.28  │ 384.26         │ 0.84      │ -0.00  │ 30.44       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Consumer Cyclical      │ 0.00  │ -0.07 │ -0.26  │ -0.31  │ -0.32 │ -0.31 │ 2.12  │ 1390.00        │ 1.25      │ -0.01  │ 163.60      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Communication Services │ 0.01  │ -0.05 │ -0.22  │ -0.28  │ -0.28 │ -0.28 │ 1.90  │ 745.84         │ 0.77      │ -0.01  │ 53.75       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Basic Materials        │ -0.00 │ -0.15 │ -0.20  │ -0.13  │ -0.13 │ -0.13 │ 2.26  │ 529.64         │ 0.76      │ -0.01  │ 37.97       │
└────────────────────────┴───────┴───────┴────────┴────────┴───────┴───────┴───────┴────────────────┴───────────┴────────┴─────────────┘
```

### Economic Databases

Starting with the EconDB database (via
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/macro/" target="_blank">macro</a>)
a large selection of Economic data can be obtained. What can be obtained is
easily found by typing `macro --show parameters` which returns the following:

```
2022 Jun 29, 10:16 (🦋) /economy/ $ macro --show parameters

┏━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Parameter ┃ Name                                                ┃ Period    ┃ Description                                                                                                                          ┃
┡━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ RGDP      │ Real gross domestic product                         │ Quarterly │ Inflation-adjusted measure that reflects the value of all goods and services produced by an economy in a given year (chain-linked    │
│           │                                                     │           │ series).                                                                                                                             │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRC      │ Real private consumption                            │ Quarterly │ All purchases made by consumers adjusted by inflation (chain-linked series).                                                         │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUC      │ Real public consumption                             │ Quarterly │ All purchases made by the government adjusted by inflation (chain-linked series).                                                    │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RGFCF     │ Real gross fixed capital formation                  │ Quarterly │ The acquisition of produced assets adjusted by inflation (chain-linked series).                                                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REXP      │ Real exports of goods and services                  │ Quarterly │ Transactions in goods and services from residents to non-residents adjusted for inflation (chain-linked series)                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIMP      │ Real imports of goods and services                  │ Quarterly │ Transactions in goods and services to residents from non-residents adjusted for inflation (chain-linked series)                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
<continues>
```

As well as the available countries with `macro --show countries`:

```
2022 Jun 29, 10:16 (🦋) /economy/ $ macro --show countries

┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┓
┃ Country                ┃ Currency ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━┩
│ Albania                │ ALL      │
├────────────────────────┼──────────┤
│ Argentina              │ ARS      │
├────────────────────────┼──────────┤
│ Australia              │ AUD      │
├────────────────────────┼──────────┤
│ Austria                │ EUR      │
├────────────────────────┼──────────┤
│ Azerbaijan             │ AZN      │
├────────────────────────┼──────────┤
│ Bangladesh             │ BDT      │
├────────────────────────┼──────────┤
│ Belarus                │ BYR      │
├────────────────────────┼──────────┤
│ Belgium                │ EUR      │
├────────────────────────┼──────────┤
<continues>
```

Then, with these parameters and countries, you can now plot macroeconomic data.
For example, we can look at unemployment rate (`URATE`) of the Netherlands,
Germany and France with the following:

```
2022 Jun 29, 10:18 (🦋) /economy/ $ macro --countries Netherlands Germany France --parameters URATE
```

This returns the following graph:

![Unemployment Rates](https://user-images.githubusercontent.com/46355364/176680030-b7936018-16ae-4dce-b652-5718977e9d57.png)

The FRED database similarly has a lot of macroeconomic data, do note that you
need an API key to do this which is explained in more detail in the
<a href="https://openbb-finance.github.io/OpenBBTerminal/#accessing-other-sources-of-data-via-api-keys" target="_blank">Accessing
other sources of data via API keys</a> section.

You have the ability to query the entire FRED database with the `-q` argument.
For example, down below we look for datasets that are centered around inflation.
The `-l` argument is set to show a maximum of 10 datasets:

```
022 Jun 29, 10:23 (🦋) /economy/ $ fred -q inflation -l 10

                                                                         Search results for inflation
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Series ID       ┃ Title                                              ┃ Description                                                                                          ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ T10YIE          │ 10-Year Breakeven Inflation Rate                   │ The breakeven inflation rate represents a measure of expected inflation derived from 10-Year         │
│                 │                                                    │ Treasury Constant Maturity Securities (BC_10YEAR) and 10-Year Treasury Inflation-Indexed Constant    │
│                 │                                                    │ Maturity Securities (TC_10YEAR). The latest value implies what market participants expect inflation  │
│                 │                                                    │ to be in the next 10 years, on average. Starting with the update on June 21, 2019, the Treasury bond │
│                 │                                                    │ data used in calculating interest rate spreads is obtained directly from the U.S. Treasury           │
│                 │                                                    │ Department (https://www.treasury.gov/resource-center/data-chart-center/interest-                     │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DFII10          │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T10YIEM         │ 10-Year Breakeven Inflation Rate                   │ The breakeven inflation rate represents a measure of expected inflation derived from 10-Year         │
│                 │                                                    │ Treasury Constant Maturity Securities (BC_10YEARM) and 10-Year Treasury Inflation-Indexed Constant   │
│                 │                                                    │ Maturity Securities (TC_10YEARM). The latest value implies what market participants expect inflation │
│                 │                                                    │ to be in the next 10 years, on average. Starting with the update on June 21, 2019, the Treasury bond │
│                 │                                                    │ data used in calculating interest rate spreads is obtained directly from the U.S. Treasury           │
│                 │                                                    │ Department (https://www.treasury.gov/resource-center/data-chart-center/interest-                     │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FII10           │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WFII10          │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIFLGFCY10XIINA │ Market Yield on U.S. Treasury Securities at        │ Averages of daily figures.  For further information regarding treasury constant maturity data,       │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ please refer to the H.15 Statistical release notes                                                   │
│                 │ Basis, Inflation-Indexed                           │ (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury Yield Curve Methodology   │
│                 │                                                    │ (https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics/treasury- │
│                 │                                                    │ yield-curve-methodology).                                                                            │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIFR          │ 5-Year, 5-Year Forward Inflation Expectation Rate  │ This series is a measure of expected inflation (on average) over the five-year period that begins    │
│                 │                                                    │ five years from today.  This series is constructed as: (((((1+((BC_10YEAR-                           │
│                 │                                                    │ TC_10YEAR)/100))^10)/((1+((BC_5YEAR-TC_5YEAR)/100))^5))^0.2)-1)*100  where BC10_YEAR, TC_10YEAR,     │
│                 │                                                    │ BC_5YEAR, and TC_5YEAR are the 10 year and 5 year nominal and inflation adjusted Treasury            │
│                 │                                                    │ securities. All of those are the actual series IDs in FRED. Starting with the update on June 21,     │
│                 │                                                    │ 2019, the Treasury bond data used in calculating interest rate spreads is obtained directly from the │
│                 │                                                    │ U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-       │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIE           │ 5-Year Breakeven Inflation Rate                    │ The breakeven inflation rate represents a measure of expected inflation derived from 5-Year Treasury │
│                 │                                                    │ Constant Maturity Securities (BC_5YEAR) and 5-Year Treasury Inflation-Indexed Constant Maturity      │
│                 │                                                    │ Securities (TC_5YEAR). The latest value implies what market participants expect inflation to be in   │
│                 │                                                    │ the next 5 years, on average. Starting with the update on June 21, 2019, the Treasury bond data used │
│                 │                                                    │ in calculating interest rate spreads is obtained directly from the U.S. Treasury Department          │
│                 │                                                    │ (https://www.treasury.gov/resource-center/data-chart-center/interest-                                │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIFRM         │ 5-Year, 5-Year Forward Inflation Expectation Rate  │ This series is a measure of expected inflation (on average) over the five-year period that begins    │
│                 │                                                    │ five years from today.  This series is constructed as: (((((1+((BC_10YEAR-                           │
│                 │                                                    │ TC_10YEAR)/100))^10)/((1+((BC_5YEAR-TC_5YEAR)/100))^5))^0.2)-1)*100  where BC10_YEAR, TC_10YEAR,     │
│                 │                                                    │ BC_5YEAR, and TC_5YEAR are the 10 year and 5 year nominal and inflation adjusted Treasury            │
│                 │                                                    │ securities. All of those are the actual series IDs in FRED. Starting with the update on June 21,     │
│                 │                                                    │ 2019, the Treasury bond data used in calculating interest rate spreads is obtained directly from the │
│                 │                                                    │ U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-       │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIEM          │ 5-Year Breakeven Inflation Rate                    │ The breakeven inflation rate represents a measure of expected inflation derived from 5-Year Treasury │
│                 │                                                    │ Constant Maturity Securities (BC_5YEAR) and 5-Year Treasury Inflation-Indexed Constant Maturity      │
│                 │                                                    │ Securities (TC_5YEAR). The latest value implies what market participants expect inflation to be in   │
│                 │                                                    │ the next 5 years, on average. Starting with the update on June 21, 2019, the Treasury bond data used │
│                 │                                                    │ in calculating interest rate spreads is obtained directly from the U.S. Treasury Department          │
│                 │                                                    │ (https://www.treasury.gov/resource-center/data-chart-center/interest-                                │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
└─────────────────┴────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

With this information, we can now plot datasets, e.g. the 5-year, 10-year,
20-year and 30-year break-even inflation rates, with the following. Note that I
added some additional series not in the above table. This is because you can
recognise the structure relatively easy of the break-even inflation rates, the
number after the `T` refers to the amount of years.

```
2022 Jun 29, 10:27 (🦋) /economy/ $ fred T5YIEM,T10YIEM,T20YIEM,T30YIEM
```

Which returns the following graph:

![Break-Even Inflation Rates](https://user-images.githubusercontent.com/46355364/176680117-6d2b53e4-4980-42e6-a46c-4da34001ad46.png)

Furthermore, understanding the influence macroeconomic trends have to indices,
the `index` command can be used. This has a large set of pre-configured indices
but has the possibility to add your own if you enter the ticker.

![Index Command Menu](https://user-images.githubusercontent.com/46355364/176680206-7ad44c3a-6cd7-45de-be5a-9bbb4e3e5c9a.png)

Which plots the following:

![Index Plot](https://user-images.githubusercontent.com/46355364/176680336-9ce60aa4-b2f7-4199-be42-62a8d78b1f5c.png)

This then all comes together within the
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/plot/" target="_blank">plot</a>
command where you can combine the datasets from the above commands into one
graph. For example, it seems there is a relationship between the inflation rates
and the unemployment rate
(<a href="https://www.investopedia.com/articles/markets/081515/how-inflation-and-unemployment-are-related.asp" target="_blank">source</a>)
which we can graphically show with:

```
2022 Jun 29, 10:38 (🦋) /economy/ $ macro -p URATE -s 2010-01-01

2022 Jun 29, 10:39 (🦋) /economy/ $ fred T5YIEM -s 2010-01-01

2022 Jun 29, 10:39 (🦋) /economy/ $ plot --y1 United_States_URATE --y2 T5YIEM
```

Resulting in the following graph:

![Combine plots of Unemployment Rate and Break Even Inflation](https://user-images.githubusercontent.com/46355364/176680454-b878604e-08a2-474e-ad9f-3b695ee958d1.png)

## Sub-menus available

The Economy menu has a few sub-menus available to delve further into a specific
macroeconomic indicator. To find more information about each menu, click on one
of the following:

- <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Introduction
  to Forecasting menu</a>: apply advanced AI and Machine Learning models to form
  prediction of future macroeconomic indicators including Recurrent Neural
  Network (RNN), Autoregressive Integrated Moving Average (ARIMA) and Monte
  Carlo forecasting.
- <a href="/OpenBBTerminal/terminal/common/qa" target="_blank">Introduction to
  Quantitative Analysis</a>: analyse the macroeconomic indicators extensively
  for seasonality, rolling windows and statistical techniques.

## Examples

Starting off, let's looking at current performance of energy futures with
`futures`.

```
2022 Jun 30, 05:39 (🦋) /economy/ $ futures energy

            Future Table [Source: FinViz]
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━┓
┃                 ┃ prevClose ┃ last   ┃ change (%) ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━┩
│ Ethanol         │ 2.16      │ 2.22   │ 2.78       │
├─────────────────┼───────────┼────────┼────────────┤
│ Gasoline RBOB   │ 3.72      │ 3.66   │ -1.82      │
├─────────────────┼───────────┼────────┼────────────┤
│ Crude Oil Brent │ 116.26    │ 112.73 │ -3.04      │
├─────────────────┼───────────┼────────┼────────────┤
│ Natural Gas     │ 6.50      │ 6.50   │ 0.03       │
├─────────────────┼───────────┼────────┼────────────┤
│ Heating Oil     │ 3.96      │ 4.00   │ 1.06       │
├─────────────────┼───────────┼────────┼────────────┤
│ Crude Oil WTI   │ 109.78    │ 110.02 │ 0.22       │
└─────────────────┴───────────┴────────┴────────────┘
```

This gives insights in the current future contracts and their (relative)
performance. Here, we take a closer look at `Crude Oil Brent` by querying the
FRED database, with `fred`, for a dataset that is relevant:

```
2022 Jun 30, 05:43 (🦋) /economy/ $ fred -q oil index
                                                                         Search results for oil index
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Series ID       ┃ Title                                             ┃ Description                                                                                          ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ OVXCLS          │ CBOE Crude Oil ETF Volatility Index               │ Exchange Traded Funds (ETFs) are shares of trusts that hold portfolios of stocks designed to closely │
│                 │                                                   │ track the price performance and yield of specific indices. Copyright, 2016, Chicago Board Options    │
│                 │                                                   │ Exchange, Inc. Reprinted with permission.                                                            │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CS     │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.S                                                        │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCU333132333132 │ Producer Price Index by Industry: Oil and Gas     │ No description provided.                                                                             │
│                 │ Field Machinery and Equipment Manufacturing       │                                                                                                      │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CN     │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.N                                                        │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CSQ    │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.S                                                        │
└─────────────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Here, we take the `CBOE Crude OIL ETF Volatility Index` to get some
understanding of how volatile oil is. Here, a period is defined from 2008 to
2015, showing the influence of the
<a href="https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008" target="_blank">Financial
Crisis of 2008</a>.

```
2022 Jun 30, 06:22 (🦋) /economy/ $ fred OVXCLS -s 2008-01-01 -e 2015-01-01
```

This plots the following graph:

![CBOE Crude OIL ETF Volatility Index](https://user-images.githubusercontent.com/46355364/176680559-2806bd91-2938-47be-8074-43b8f071aaad.png)

A hypothesis could be that the more volatile the price of oil is, the lower the
confidence of the consumers is. It is possible to visually depict this. First,
let's plot the consumer confidence of Germany.

```
2022 Jun 30, 07:59 (🦋) /economy/ $ macro -p CONF -c Germany -s 2008-01-01 -e 2015-01-01
```

![Consumer Confidence Germany](https://user-images.githubusercontent.com/46355364/176680603-1ace9534-f18a-4362-a1c0-d28c675d9415.png)

Now, combine these two graphs with the `plot` command. This helps in visually
depicting a (negative) relationship.

```
2022 Jun 30, 08:00 (🦋) /economy/ $ plot --y1 Germany_CONF --y2 OVXCLS
```

## ![CBOE Crude OIL ETF Volatility Index and Consumer Confidence Germany](https://user-images.githubusercontent.com/46355364/176680645-79b8f44d-adc7-49e4-b749-80188f22850f.png)

title: Introduction to Economy keywords: ['economy', 'macro', 'index',
'treasury', 'fred', 'market'] excerpt: "The Introduction to Economy explains how
to use the menu and provides a brief description of its sub-menus"

---

The Economy menu enables you to obtain market overviews
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/overview/" target="_blank">overview</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/futures/" target="_blank">futures</a>),
see yield curves of any country
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/ycrv/" target="_blank">ycrv</a>)
and discover sector, industry and country performance
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/performance/" target="_blank">performance</a>).
Next to that, the databases of
<a href="https://www.econdb.com/" target="_blank">EconDB</a>,
<a href="https://fred.stlouisfed.org/" target="_blank">FRED</a> and
<a href="https://finance.yahoo.com/" target="_blank">Yahoo Finance</a> can be
accessed via
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/macro/" target="_blank">macro</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/fred/" target="_blank">fred</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/index/" target="_blank">index</a>
respectively. All of this can also be further analysed with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Forecasting
menu</a> (`forecast`) and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/qa/" target="_blank">Quantitative
Techniques</a> (`qa`).

## How to use

The Economy menu is called upon by typing `economy` which opens the following
menu:

![Economy Menu](https://user-images.githubusercontent.com/46355364/176679746-21b28263-96be-4701-9fd1-8657602e0214.png)

Within the Economy menu you have a variety of options ranging from treasury
rates to population growth to country financial performance. As this is quite
extensive, the guide has two sections. The first section will discuss valuations
and performance and the second section discusses the databases.

### Performance and valuations

By using
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/overview/" target="_blank">overview</a>
we can look into market overviews from the perspective of indices (`indices`),
bonds (`usbonds` and `glbonds`), currencies (`currencies`) and in general. E.g.
let's look at global bond performance by adding the `-t` argument:

```
2022 Jun 29, 09:56 (🦋) /economy/ $ overview -t glbonds

                              Global Bonds
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━┓
┃                                   ┃ Rate (%) ┃ Yld (%) ┃ Yld Chg (%) ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━┩
│ U.S. 10 Year Treasury Note        │ 2.875    │ 3.164   │ -0.016      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Germany 10 Year Government Bond   │ 0.000    │ 1.582   │ -0.046      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ U.K. 10 Year Gilt                 │ 4.250    │ 2.440   │ -0.028      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Japan 10 Year Government Bond     │ 0.200    │ 0.232   │ -0.002      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ Australia 10 Year Government Bond │ 1.000    │ 3.703   │ -0.041      │
├───────────────────────────────────┼──────────┼─────────┼─────────────┤
│ China 10 Year Government Bond     │ 2.760    │ 2.851   │ -0.010      │
└───────────────────────────────────┴──────────┴─────────┴─────────────┘
```

Next to that, to better understand the current commodity market we can look into
the
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/futures/" target="_blank">futures</a>
of a variety of commodities. For example, let's look at a general overview:

```
2022 Jun 29, 09:58 (🦋) /economy/ $ futures

     Futures/Commodities [Source: Wall St. Journal]
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┓
┃                           ┃ Price   ┃ Chg     ┃ %Chg  ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━┩
│ Crude Oil Futures         │ 113.10  │ 1.34    │ 1.20  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Brent Crude Futures       │ 115.24  │ 1.44    │ 1.27  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Gold Futures              │ 1823.50 │ 2.30    │ 0.13  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Silver Futures            │ 20.690  │ -0.116  │ -0.56 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Natural Gas Futures       │ 6.738   │ 0.187   │ 2.85  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Unleaded Gasoline Futures │ 3.8239  │ -0.0203 │ -0.53 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Copper Futures            │ 3.7905  │ 0.0105  │ 0.28  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Corn Futures              │ 653.75  │ -5.50   │ -0.83 │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Wheat Futures             │ 938.25  │ 2.25    │ 0.24  │
├───────────────────────────┼─────────┼─────────┼───────┤
│ Bloomberg Commodity Index │ 123.95  │ 1.25    │ 1.02  │
└───────────────────────────┴─────────┴─────────┴───────┘
```

Furthermore, we can look into yield curves of any country, by default this is
set to the United States, but it can be any:

![Yield Curves Options Menu](https://user-images.githubusercontent.com/46355364/176679828-bd90df8c-bff3-42a7-8e03-897c0be99443.png)

Which then returns the following plot:

![Yield Curve](https://user-images.githubusercontent.com/46355364/176679949-dd8b5b47-1125-4b1c-9558-25f1d2d70ffc.png)

Lastly, we can also show industry, sector and country performance with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/performance/" target="_blank">performance</a>.
For example, looking at the `sectors` returns the following:

```
2022 Jun 29, 10:03 (🦋) /economy/ $ performance -g sector

                                                         Group Performance Data
┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━┓
┃ Name                   ┃ Week  ┃ Month ┃ 3Month ┃ 6Month ┃ 1Year ┃ YTD   ┃ Recom ┃ AvgVolume [1M] ┃ RelVolume ┃ Change ┃ Volume [1M] ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━┩
│ Utilities              │ 0.04  │ -0.08 │ -0.07  │ -0.03  │ 0.06  │ -0.04 │ 2.37  │ 171.85         │ 0.50      │ -0.00  │ 8.05        │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Technology             │ 0.01  │ -0.10 │ -0.25  │ -0.31  │ -0.22 │ -0.31 │ 2.00  │ 1660.00        │ 1.08      │ -0.01  │ 168.13      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Real Estate            │ 0.01  │ -0.06 │ -0.15  │ -0.21  │ -0.24 │ -0.22 │ 2.21  │ 396.36         │ 0.68      │ -0.02  │ 25.29       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Industrials            │ 0.01  │ -0.09 │ -0.18  │ -0.20  │ -0.17 │ -0.20 │ 2.26  │ 656.49         │ 0.99      │ -0.01  │ 61.12       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Healthcare             │ 0.03  │ -0.04 │ -0.10  │ -0.14  │ -0.12 │ -0.14 │ 2.07  │ 1530.00        │ 3.02      │ -0.00  │ 434.03      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Financial              │ 0.01  │ -0.10 │ -0.19  │ -0.18  │ -0.16 │ -0.17 │ 2.26  │ 1010.00        │ 0.67      │ -0.00  │ 63.28       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Energy                 │ 0.04  │ -0.12 │ -0.03  │ 0.24   │ 0.29  │ 0.26  │ 2.21  │ 851.32         │ 0.82      │ 0.00   │ 65.35       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Consumer Defensive     │ 0.02  │ -0.04 │ -0.08  │ -0.08  │ -0.05 │ -0.09 │ 2.28  │ 384.26         │ 0.84      │ -0.00  │ 30.44       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Consumer Cyclical      │ 0.00  │ -0.07 │ -0.26  │ -0.31  │ -0.32 │ -0.31 │ 2.12  │ 1390.00        │ 1.25      │ -0.01  │ 163.60      │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Communication Services │ 0.01  │ -0.05 │ -0.22  │ -0.28  │ -0.28 │ -0.28 │ 1.90  │ 745.84         │ 0.77      │ -0.01  │ 53.75       │
├────────────────────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┼────────────────┼───────────┼────────┼─────────────┤
│ Basic Materials        │ -0.00 │ -0.15 │ -0.20  │ -0.13  │ -0.13 │ -0.13 │ 2.26  │ 529.64         │ 0.76      │ -0.01  │ 37.97       │
└────────────────────────┴───────┴───────┴────────┴────────┴───────┴───────┴───────┴────────────────┴───────────┴────────┴─────────────┘
```

### Economic Databases

Starting with the EconDB database (via
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/macro/" target="_blank">macro</a>)
a large selection of Economic data can be obtained. What can be obtained is
easily found by typing `macro --show parameters` which returns the following:

```
2022 Jun 29, 10:16 (🦋) /economy/ $ macro --show parameters

┏━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Parameter ┃ Name                                                ┃ Period    ┃ Description                                                                                                                          ┃
┡━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ RGDP      │ Real gross domestic product                         │ Quarterly │ Inflation-adjusted measure that reflects the value of all goods and services produced by an economy in a given year (chain-linked    │
│           │                                                     │           │ series).                                                                                                                             │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRC      │ Real private consumption                            │ Quarterly │ All purchases made by consumers adjusted by inflation (chain-linked series).                                                         │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUC      │ Real public consumption                             │ Quarterly │ All purchases made by the government adjusted by inflation (chain-linked series).                                                    │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RGFCF     │ Real gross fixed capital formation                  │ Quarterly │ The acquisition of produced assets adjusted by inflation (chain-linked series).                                                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REXP      │ Real exports of goods and services                  │ Quarterly │ Transactions in goods and services from residents to non-residents adjusted for inflation (chain-linked series)                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIMP      │ Real imports of goods and services                  │ Quarterly │ Transactions in goods and services to residents from non-residents adjusted for inflation (chain-linked series)                      │
├───────────┼─────────────────────────────────────────────────────┼───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
<continues>
```

As well as the available countries with `macro --show countries`:

```
2022 Jun 29, 10:16 (🦋) /economy/ $ macro --show countries

┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┓
┃ Country                ┃ Currency ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━┩
│ Albania                │ ALL      │
├────────────────────────┼──────────┤
│ Argentina              │ ARS      │
├────────────────────────┼──────────┤
│ Australia              │ AUD      │
├────────────────────────┼──────────┤
│ Austria                │ EUR      │
├────────────────────────┼──────────┤
│ Azerbaijan             │ AZN      │
├────────────────────────┼──────────┤
│ Bangladesh             │ BDT      │
├────────────────────────┼──────────┤
│ Belarus                │ BYR      │
├────────────────────────┼──────────┤
│ Belgium                │ EUR      │
├────────────────────────┼──────────┤
<continues>
```

Then, with these parameters and countries, you can now plot macroeconomic data.
For example, we can look at unemployment rate (`URATE`) of the Netherlands,
Germany and France with the following:

```
2022 Jun 29, 10:18 (🦋) /economy/ $ macro --countries Netherlands Germany France --parameters URATE
```

This returns the following graph:

![Unemployment Rates](https://user-images.githubusercontent.com/46355364/176680030-b7936018-16ae-4dce-b652-5718977e9d57.png)

The FRED database similarly has a lot of macroeconomic data, do note that you
need an API key to do this which is explained in more detail in the
<a href="https://openbb-finance.github.io/OpenBBTerminal/#accessing-other-sources-of-data-via-api-keys" target="_blank">Accessing
other sources of data via API keys</a> section.

You have the ability to query the entire FRED database with the `-q` argument.
For example, down below we look for datasets that are centered around inflation.
The `-l` argument is set to show a maximum of 10 datasets:

```
022 Jun 29, 10:23 (🦋) /economy/ $ fred -q inflation -l 10

                                                                         Search results for inflation
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Series ID       ┃ Title                                              ┃ Description                                                                                          ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ T10YIE          │ 10-Year Breakeven Inflation Rate                   │ The breakeven inflation rate represents a measure of expected inflation derived from 10-Year         │
│                 │                                                    │ Treasury Constant Maturity Securities (BC_10YEAR) and 10-Year Treasury Inflation-Indexed Constant    │
│                 │                                                    │ Maturity Securities (TC_10YEAR). The latest value implies what market participants expect inflation  │
│                 │                                                    │ to be in the next 10 years, on average. Starting with the update on June 21, 2019, the Treasury bond │
│                 │                                                    │ data used in calculating interest rate spreads is obtained directly from the U.S. Treasury           │
│                 │                                                    │ Department (https://www.treasury.gov/resource-center/data-chart-center/interest-                     │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DFII10          │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T10YIEM         │ 10-Year Breakeven Inflation Rate                   │ The breakeven inflation rate represents a measure of expected inflation derived from 10-Year         │
│                 │                                                    │ Treasury Constant Maturity Securities (BC_10YEARM) and 10-Year Treasury Inflation-Indexed Constant   │
│                 │                                                    │ Maturity Securities (TC_10YEARM). The latest value implies what market participants expect inflation │
│                 │                                                    │ to be in the next 10 years, on average. Starting with the update on June 21, 2019, the Treasury bond │
│                 │                                                    │ data used in calculating interest rate spreads is obtained directly from the U.S. Treasury           │
│                 │                                                    │ Department (https://www.treasury.gov/resource-center/data-chart-center/interest-                     │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FII10           │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WFII10          │ Market Yield on U.S. Treasury Securities at        │ For further information regarding treasury constant maturity data, please refer to the H.15          │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ Statistical Release notes (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury │
│                 │ Basis, Inflation-Indexed                           │ Yield Curve Methodology (https://home.treasury.gov/policy-issues/financing-the-government/interest-  │
│                 │                                                    │ rate-statistics/treasury-yield-curve-methodology).                                                   │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIFLGFCY10XIINA │ Market Yield on U.S. Treasury Securities at        │ Averages of daily figures.  For further information regarding treasury constant maturity data,       │
│                 │ 10-Year Constant Maturity, Quoted on an Investment │ please refer to the H.15 Statistical release notes                                                   │
│                 │ Basis, Inflation-Indexed                           │ (https://www.federalreserve.gov/releases/h15/default.htm) and the Treasury Yield Curve Methodology   │
│                 │                                                    │ (https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics/treasury- │
│                 │                                                    │ yield-curve-methodology).                                                                            │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIFR          │ 5-Year, 5-Year Forward Inflation Expectation Rate  │ This series is a measure of expected inflation (on average) over the five-year period that begins    │
│                 │                                                    │ five years from today.  This series is constructed as: (((((1+((BC_10YEAR-                           │
│                 │                                                    │ TC_10YEAR)/100))^10)/((1+((BC_5YEAR-TC_5YEAR)/100))^5))^0.2)-1)*100  where BC10_YEAR, TC_10YEAR,     │
│                 │                                                    │ BC_5YEAR, and TC_5YEAR are the 10 year and 5 year nominal and inflation adjusted Treasury            │
│                 │                                                    │ securities. All of those are the actual series IDs in FRED. Starting with the update on June 21,     │
│                 │                                                    │ 2019, the Treasury bond data used in calculating interest rate spreads is obtained directly from the │
│                 │                                                    │ U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-       │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIE           │ 5-Year Breakeven Inflation Rate                    │ The breakeven inflation rate represents a measure of expected inflation derived from 5-Year Treasury │
│                 │                                                    │ Constant Maturity Securities (BC_5YEAR) and 5-Year Treasury Inflation-Indexed Constant Maturity      │
│                 │                                                    │ Securities (TC_5YEAR). The latest value implies what market participants expect inflation to be in   │
│                 │                                                    │ the next 5 years, on average. Starting with the update on June 21, 2019, the Treasury bond data used │
│                 │                                                    │ in calculating interest rate spreads is obtained directly from the U.S. Treasury Department          │
│                 │                                                    │ (https://www.treasury.gov/resource-center/data-chart-center/interest-                                │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIFRM         │ 5-Year, 5-Year Forward Inflation Expectation Rate  │ This series is a measure of expected inflation (on average) over the five-year period that begins    │
│                 │                                                    │ five years from today.  This series is constructed as: (((((1+((BC_10YEAR-                           │
│                 │                                                    │ TC_10YEAR)/100))^10)/((1+((BC_5YEAR-TC_5YEAR)/100))^5))^0.2)-1)*100  where BC10_YEAR, TC_10YEAR,     │
│                 │                                                    │ BC_5YEAR, and TC_5YEAR are the 10 year and 5 year nominal and inflation adjusted Treasury            │
│                 │                                                    │ securities. All of those are the actual series IDs in FRED. Starting with the update on June 21,     │
│                 │                                                    │ 2019, the Treasury bond data used in calculating interest rate spreads is obtained directly from the │
│                 │                                                    │ U.S. Treasury Department (https://www.treasury.gov/resource-center/data-chart-center/interest-       │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
├─────────────────┼────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T5YIEM          │ 5-Year Breakeven Inflation Rate                    │ The breakeven inflation rate represents a measure of expected inflation derived from 5-Year Treasury │
│                 │                                                    │ Constant Maturity Securities (BC_5YEAR) and 5-Year Treasury Inflation-Indexed Constant Maturity      │
│                 │                                                    │ Securities (TC_5YEAR). The latest value implies what market participants expect inflation to be in   │
│                 │                                                    │ the next 5 years, on average. Starting with the update on June 21, 2019, the Treasury bond data used │
│                 │                                                    │ in calculating interest rate spreads is obtained directly from the U.S. Treasury Department          │
│                 │                                                    │ (https://www.treasury.gov/resource-center/data-chart-center/interest-                                │
│                 │                                                    │ rates/Pages/TextView.aspx?data=yield).                                                               │
└─────────────────┴────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

With this information, we can now plot datasets, e.g. the 5-year, 10-year,
20-year and 30-year break-even inflation rates, with the following. Note that I
added some additional series not in the above table. This is because you can
recognise the structure relatively easy of the break-even inflation rates, the
number after the `T` refers to the amount of years.

```
2022 Jun 29, 10:27 (🦋) /economy/ $ fred T5YIEM,T10YIEM,T20YIEM,T30YIEM
```

Which returns the following graph:

![Break-Even Inflation Rates](https://user-images.githubusercontent.com/46355364/176680117-6d2b53e4-4980-42e6-a46c-4da34001ad46.png)

Furthermore, understanding the influence macroeconomic trends have to indices,
the `index` command can be used. This has a large set of pre-configured indices
but has the possibility to add your own if you enter the ticker.

![Index Command Menu](https://user-images.githubusercontent.com/46355364/176680206-7ad44c3a-6cd7-45de-be5a-9bbb4e3e5c9a.png)

Which plots the following:

![Index Plot](https://user-images.githubusercontent.com/46355364/176680336-9ce60aa4-b2f7-4199-be42-62a8d78b1f5c.png)

This then all comes together within the
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/economy/plot/" target="_blank">plot</a>
command where you can combine the datasets from the above commands into one
graph. For example, it seems there is a relationship between the inflation rates
and the unemployment rate
(<a href="https://www.investopedia.com/articles/markets/081515/how-inflation-and-unemployment-are-related.asp" target="_blank">source</a>)
which we can graphically show with:

```
2022 Jun 29, 10:38 (🦋) /economy/ $ macro -p URATE -s 2010-01-01

2022 Jun 29, 10:39 (🦋) /economy/ $ fred T5YIEM -s 2010-01-01

2022 Jun 29, 10:39 (🦋) /economy/ $ plot --y1 United_States_URATE --y2 T5YIEM
```

Resulting in the following graph:

![Combine plots of Unemployment Rate and Break Even Inflation](https://user-images.githubusercontent.com/46355364/176680454-b878604e-08a2-474e-ad9f-3b695ee958d1.png)

## Sub-menus available

The Economy menu has a few sub-menus available to delve further into a specific
macroeconomic indicator. To find more information about each menu, click on one
of the following:

- <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Introduction
  to Forecasting menu</a>: apply advanced AI and Machine Learning models to form
  prediction of future macroeconomic indicators including Recurrent Neural
  Network (RNN), Autoregressive Integrated Moving Average (ARIMA) and Monte
  Carlo forecasting.
- <a href="/OpenBBTerminal/terminal/common/qa" target="_blank">Introduction to
  Quantitative Analysis</a>: analyse the macroeconomic indicators extensively
  for seasonality, rolling windows and statistical techniques.

## Examples

Starting off, let's looking at current performance of energy futures with
`futures`.

```
2022 Jun 30, 05:39 (🦋) /economy/ $ futures energy

            Future Table [Source: FinViz]
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━┓
┃                 ┃ prevClose ┃ last   ┃ change (%) ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━┩
│ Ethanol         │ 2.16      │ 2.22   │ 2.78       │
├─────────────────┼───────────┼────────┼────────────┤
│ Gasoline RBOB   │ 3.72      │ 3.66   │ -1.82      │
├─────────────────┼───────────┼────────┼────────────┤
│ Crude Oil Brent │ 116.26    │ 112.73 │ -3.04      │
├─────────────────┼───────────┼────────┼────────────┤
│ Natural Gas     │ 6.50      │ 6.50   │ 0.03       │
├─────────────────┼───────────┼────────┼────────────┤
│ Heating Oil     │ 3.96      │ 4.00   │ 1.06       │
├─────────────────┼───────────┼────────┼────────────┤
│ Crude Oil WTI   │ 109.78    │ 110.02 │ 0.22       │
└─────────────────┴───────────┴────────┴────────────┘
```

This gives insights in the current future contracts and their (relative)
performance. Here, we take a closer look at `Crude Oil Brent` by querying the
FRED database, with `fred`, for a dataset that is relevant:

```
2022 Jun 30, 05:43 (🦋) /economy/ $ fred -q oil index
                                                                         Search results for oil index
┏━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Series ID       ┃ Title                                             ┃ Description                                                                                          ┃
┡━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ OVXCLS          │ CBOE Crude Oil ETF Volatility Index               │ Exchange Traded Funds (ETFs) are shares of trusts that hold portfolios of stocks designed to closely │
│                 │                                                   │ track the price performance and yield of specific indices. Copyright, 2016, Chicago Board Options    │
│                 │                                                   │ Exchange, Inc. Reprinted with permission.                                                            │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CS     │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.S                                                        │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCU333132333132 │ Producer Price Index by Industry: Oil and Gas     │ No description provided.                                                                             │
│                 │ Field Machinery and Equipment Manufacturing       │                                                                                                      │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CN     │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.N                                                        │
├─────────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPG211111CSQ    │ Industrial Production: Mining, Quarrying, and Oil │ The industrial production (IP) index measures the real output of all relevant establishments located │
│                 │ and Gas Extraction: Crude Oil (NAICS = 211111pt.) │ in the United States, regardless of their ownership, but not those located in U.S. territories.      │
│                 │                                                   │ NAICS = 211111pt.  Source Code: IP.G211111C.S                                                        │
└─────────────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Here, we take the `CBOE Crude OIL ETF Volatility Index` to get some
understanding of how volatile oil is. Here, a period is defined from 2008 to
2015, showing the influence of the
<a href="https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008" target="_blank">Financial
Crisis of 2008</a>.

```
2022 Jun 30, 06:22 (🦋) /economy/ $ fred OVXCLS -s 2008-01-01 -e 2015-01-01
```

This plots the following graph:

![CBOE Crude OIL ETF Volatility Index](https://user-images.githubusercontent.com/46355364/176680559-2806bd91-2938-47be-8074-43b8f071aaad.png)

A hypothesis could be that the more volatile the price of oil is, the lower the
confidence of the consumers is. It is possible to visually depict this. First,
let's plot the consumer confidence of Germany.

```
2022 Jun 30, 07:59 (🦋) /economy/ $ macro -p CONF -c Germany -s 2008-01-01 -e 2015-01-01
```

![Consumer Confidence Germany](https://user-images.githubusercontent.com/46355364/176680603-1ace9534-f18a-4362-a1c0-d28c675d9415.png)

Now, combine these two graphs with the `plot` command. This helps in visually
depicting a (negative) relationship.

```
2022 Jun 30, 08:00 (🦋) /economy/ $ plot --y1 Germany_CONF --y2 OVXCLS
```

![CBOE Crude OIL ETF Volatility Index and Consumer Confidence Germany](https://user-images.githubusercontent.com/46355364/176680645-79b8f44d-adc7-49e4-b749-80188f22850f.png)
