---
title: Fundamental Analysis
keywords: ["fundamentals", "fundamental", "fa", "ratios", "earnings", "balance", "income", "cash", "statement", "statements", "sec", "multiples", "price", "ebitda", "ebitdam", "revenue", "quarter", "annual", "change", "company", "performance", "filing", "filings", "10K", "8K", "audit", "audited"]
date: "2022-06-20"
type: guides
status: publish
excerpt: "This guide introduces the Fundamental Analysis menu within the Stocks menu, briefly explains the features, and provides examples in context."
geekdocCollapseSection: true
---

The Fundamental Analysis menu is a set of tools for measuring a company's intrinsic value, relative to the market price. Functions within this menu are generally microeconomic factors. The purpose is to harness data reported in financial statements and estimate the tangible value of a share. Revenue of companies with a long public history are easier to forecast, and the consensus of many analysts will indicate the level of confidence in future expectations. In addition to these features, there are <a href="/terminal/guides/intros/stocks/screener/" target="_blank">screeners</a> to compare fundamentals across groups of companies.

### How to use

Enter the submenu from the <a href="/terminal/guides/intros/stocks/" target="_blank">Stocks menu</a>, with a ticker loaded.

<img width="1166" alt="Fundamental Analysis Menu" src="https://user-images.githubusercontent.com/85772166/175221782-87f0d0df-3a50-4268-8af8-a5f1f12f3d32.png"></img>

Some commands offer interpretations of the data, but, the majority are statements reported to the SEC. The `data` command is a table of basic statistics, including price.
````
(🦋) /stocks/fa/ $ data

                   Ticker Screener
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    ┃ Values                       ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Company            │ Smith & Wesson Brands, Inc.  │
├────────────────────┼──────────────────────────────┤
│ Sector             │ Industrials                  │
├────────────────────┼──────────────────────────────┤
│ Industry           │ Aerospace & Defense          │
├────────────────────┼──────────────────────────────┤
│ Country            │ USA                          │
├────────────────────┼──────────────────────────────┤
│ Website            │ https://www.smith-wesson.com │
├────────────────────┼──────────────────────────────┤
│ P/E                │ 2.65                         │
├────────────────────┼──────────────────────────────┤
<continues>
````
The `analysis` command reads SEC filings with NLP and extracts the most important statements.

````
(🦋) /stocks/fa/ $ analysis

        DISCUSSION AND ANALYSIS:
Other products and services revenue decreased $874,000, or 3.9%, from the prior year comparable period, primarily because of decreased sales of component parts and handcuffs, partially offset by an increase in sales for business-to-business services.

Cash provided by operating activities was $105.4 million for the six months ended October 31, 2021 compared with $138.1 million of cash generated for the six months ended October 31, 2020.

We recorded capital expenditures of $10.1 million for the six months ended October 31, 2021, $4.9 million lower than the prior year comparable period, which included machinery and equipment utilized to increase capacity.

Financing Activities Cash used in financing activities was $48.8 million for the six months ended October 31, 2021 compared with $188.7 million for the six months ended October 31, 2020.

During the six months ending October 31, 2021, we paid $505,500 in principal payments relating to this finance lease.

With the completion of the Separation on August 24, 2020, we entered into a sublease for 59.0% of this facility under the same terms as the master lease.

Selling, marketing, and distribution expenses decreased $191,000, primarily as a result of decreased compensation-related expenses and lower spending on targeted customer promotions, partially offset by increased marketing related expenses and increased travel and entertainment costs.

This is primarily due to lower spending on capacity increases offset by new product development and repair and replacement of equipment.

Additionally, as it relates to the Relocation, we expect to incur capital expenditures in connection with the construction and equipping of the new facility in an aggregate amount of not less than $120.0 million on or before December 31, 2025.

The following table sets forth certain cash flow information for the six months ended October 31, 2021 and 2020 (dollars in thousands): Operating Activities On an annual basis, operating activities generally represent the principal source of our cash flow.

The revolving line provides for availability for general corporate purposes, with borrowings to bear interest at either the Base Rate or LIBOR rate, plus an applicable margin based on our consolidated leverage ratio, as of October 31, 2021.

In response to a Springing Lien Triggering Event (as defined in the credit agreement), we would be required to enter into certain documents that create in favor of TD Bank, N. A., as administrative agent, and the lenders party to such documents as legal, valid, and enforceable first priority lien on the collateral described therein.
````
The `warnings` command uses <a href="https://www.drwealth.com/gone-fishing-with-buffett-by-sean-seah/comment-page-1/" target="_blank">Sean Seah's signals</a> to highlight certain of qualities a business.

````
(🦋) /stocks/fa/ $ warnings


                                          Sean Seah Warnings
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃                                    ┃ 2017       ┃ 2018       ┃ 2019       ┃ 2020       ┃ 2021       ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ EPS (Basic)                        │  2.29      │  0.37      │  0.34      │  1.11      │  4.62      │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Net Income                         │  127850000 │  20130000  │  18410000  │  27650000  │  243570000 │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Interest Expense                   │  8580000   │  11170000  │  9350000   │  11630000  │  3920000   │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ EBITDA                             │  253030000 │  78790000  │  101910000 │  85990000  │  358720000 │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Total Shareholders' Equity         │  393160000 │  422150000 │  444440000 │  387120000 │  266380000 │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Liabilities & Shareholders' Equity │  788040000 │  745060000 │  766790000 │  729520000 │  446390000 │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Long-Term Debt                     │  210660000 │  202300000 │  194830000 │  199040000 │  42420000  │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ ROE                                │  0.33      │  0.05      │  0.04      │  0.07      │  0.91      │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ Interest Coverage Ratio            │  29.49     │  7.05      │  10.9      │  7.39      │  91.51     │
├────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│ ROA                                │  0.16      │  0.03      │  0.02      │  0.04      │  0.55      │
└────────────────────────────────────┴────────────┴────────────┴────────────┴────────────┴────────────┘

Warnings:

No consistent historical earnings per share
NOT consistently high return on equity
NOT consistently high return on assets
5x Net Income < Long-Term Debt
````
Historical market cap (`mktcap`) is a different way to look at a company's value over time. It can be useful for smoothing a profile where the number of outstanding shares is dynamic.

![Historical Market Cap of Smith & Wesson](https://user-images.githubusercontent.com/85772166/175222009-30929c7b-5de9-49dd-862f-569fd8b28732.png)

There are optional arguments for every command, attach the `-h` argument to show the help dialogue.

### Examples

The `cal` command will show the upcoming earnings date, and the averages of same-period past-performance.

````
(🦋) /stocks/fa/ $ cal

                                              SWBI Calendar Earnings
┏━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ Earnings Date ┃ Earnings Average ┃ Earnings Low ┃ Earnings High ┃ Revenue Average ┃ Revenue Low ┃ Revenue High ┃
┡━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ 06/23/2022    │ 0.690            │ 0.640        │ 0.730         │ 179.850 M       │ 176.840 M   │ 185.700 M    │
└───────────────┴──────────────────┴──────────────┴───────────────┴─────────────────┴─────────────┴──────────────┘
````

The command `dupont` is a chart detailing the components of a company's return on equity.

![SWBI Extended Dupont](https://user-images.githubusercontent.com/85772166/175222164-1a279555-ed92-42f3-b604-37023d062278.png)

Discounted cash flow statements are popular as a revenue/value forecasting tool. `dcf` will automatically prepare one as a spreadsheet, where the factors can be modified.

![Discounted cash flow statement for Smith and Wesson](https://user-images.githubusercontent.com/85772166/175222318-57037807-22e2-4a7a-9e2c-e24c2779c35b.png)

Stock splits are an important part of the historical price-per-share. While they are supposed to be market cap neutral, underlying fundamentals will drive the corporate actions.

![Smith and Wesson splits](https://user-images.githubusercontent.com/85772166/175222380-d539c13b-4672-4f00-a3b6-12884c5c15cf.png)

Sometimes a company must do a reverse-split to save its listing from collapsing share prices.

![Aurora Cannabis reverse split](https://user-images.githubusercontent.com/85772166/175223786-6bb7e14b-09c5-43fd-b6fd-beaa4551e814.png)

Use the command `shrs` to see a quick breakdown of the ownership and major shareholders.
````
(🦋) /stocks/fa/ $ shrs


                  SWBI Major Holders
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        ┃                                           ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ 2.22%  │ Percentage of Shares Held by All Insider  │
├────────┼───────────────────────────────────────────┤
│ 58.25% │ Percentage of Shares Held by Institutions │
├────────┼───────────────────────────────────────────┤
│ 59.57% │ Percentage of Float Held by Institutions  │
├────────┼───────────────────────────────────────────┤
│ 293    │ Number of Institutions Holding Shares     │
└────────┴───────────────────────────────────────────┘


                                  SWBI Institutional Holders
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┓
┃ Holder                                     ┃ Shares    ┃ Date Reported ┃ Stake  ┃ Value    ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━┩
│ Blackrock Inc.                             │ 3.779 M   │ 2022-03-30    │ 8.30 % │ 57.171 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Vanguard Group, Inc. (The)                 │ 3.519 M   │ 2022-03-30    │ 7.73 % │ 53.245 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Renaissance Technologies, LLC              │ 2.721 M   │ 2022-03-30    │ 5.98 % │ 41.174 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Dimensional Fund Advisors LP               │ 1.947 M   │ 2022-03-30    │ 4.28 % │ 29.463 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ State Street Corporation                   │ 891.078 K │ 2022-03-30    │ 1.96 % │ 13.482 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Geode Capital Management, LLC              │ 837.121 K │ 2022-03-30    │ 1.84 % │ 12.666 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Prudential Financial, Inc.                 │ 713.909 K │ 2022-03-30    │ 1.57 % │ 10.801 M │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ First Trust Advisors LP                    │ 559.992 K │ 2022-03-30    │ 1.23 % │ 8.473 M  │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Charles Schwab Investment Management, Inc. │ 553.310 K │ 2022-03-30    │ 1.22 % │ 8.372 M  │
├────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Jupiter Asset Management Limited           │ 486.853 K │ 2022-03-30    │ 1.07 % │ 7.366 M  │
└────────────────────────────────────────────┴───────────┴───────────────┴────────┴──────────┘


                                       SWBI Mutual Fund Holders
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┓
┃ Holder                                             ┃ Shares    ┃ Date Reported ┃ Stake  ┃ Value    ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━┩
│ Vanguard Total Stock Market Index Fund             │ 1.366 M   │ 2022-03-30    │ 3.00 % │ 20.664 M │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ iShares Russell 2000 ETF                           │ 1.025 M   │ 2022-04-29    │ 2.25 % │ 14.079 M │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Vanguard Extended Market Index Fund                │ 635.273 K │ 2022-03-30    │ 1.40 % │ 9.612 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Vanguard Small-Cap Index Fund                      │ 611.300 K │ 2022-03-30    │ 1.34 % │ 9.249 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ iShares U.S. Aerospace & Defense ETF               │ 592.471 K │ 2022-05-30    │ 1.30 % │ 9.171 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ First Trust SMID Cap Rising Dividend Achievers ETF │ 588.837 K │ 2022-05-30    │ 1.29 % │ 9.115 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ iShares Russell 2000 Growth ETF                    │ 413.637 K │ 2022-05-30    │ 0.91 % │ 6.403 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Vanguard Small Cap Value Index Fund                │ 393.738 K │ 2022-03-30    │ 0.87 % │ 5.957 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ DFA U.S. Small Cap Series                          │ 388.776 K │ 2022-01-30    │ 0.85 % │ 6.640 M  │
├────────────────────────────────────────────────────┼───────────┼───────────────┼────────┼──────────┤
│ Fidelity Small Cap Index Fund                      │ 359.342 K │ 2022-03-30    │ 0.79 % │ 5.437 M  │
└────────────────────────────────────────────────────┴───────────┴───────────────┴────────┴──────────┘
````

Financial statements default to yearly reports, adding `-q` will flag for quarterly statements with `-l` being the number of quarters to show.

```
(🦋) /stocks/fa/ $ income --source FinancialModelingPrep -l 10

                                                                                                SWBI Income Statement
┏━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┓
┃                   ┃ 2013              ┃ 2014              ┃ 2015              ┃ 2016              ┃ 2017              ┃ 2018              ┃ 2019       ┃ 2020              ┃ 2021              ┃ 2022              ┃
┡━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━┩
│ Reported currency │ USD               │ USD               │ USD               │ USD               │ USD               │ USD               │ USD        │ USD               │ USD               │ USD               │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Cik               │ 1.093 M           │ 1.093 M           │ 1.093 M           │ 1.093 M           │ 1.093 M           │ 1.093 M           │ 1.093 M    │ 1.093 M           │ 1.093 M           │ 1.093 M           │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Filling date      │ 2013-06-25        │ 2014-06-19        │ 2015-06-22        │ 2016-06-16        │ 2017-06-29        │ 2018-06-20        │ 2019-06-19 │ 2020-06-19        │ 2021-06-17        │ 2022-06-23        │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Accepted date     │ 2013-06-25        │ 2014-06-19        │ 2015-06-22        │ 2016-06-16        │ 2017-06-29        │ 2018-06-20        │ 2019-06-19 │ 2020-06-19        │ 2021-06-17        │ 2022-06-23        │
│                   │ 16:09:28          │ 16:47:52          │ 06:24:08          │ 16:19:13          │ 16:16:50          │ 16:17:50          │            │ 16:47:03          │ 16:10:55          │ 16:41:05          │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Calendar year     │ 2.013 K           │ 2.014 K           │ 2.015 K           │ 2.016 K           │ 2.017 K           │ 2.018 K           │ 2.019 K    │ 2.020 K           │ 2.021 K           │ 2.022 K           │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Period            │ FY                │ FY                │ FY                │ FY                │ FY                │ FY                │ FY         │ FY                │ FY                │ FY                │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Revenue           │ 587.514 M         │ 626.620 M         │ 551.862 M         │ 722.908 M         │ 903.188 M         │ 606.850 M         │ 638.277 M  │ 678.390 M         │ 1.059 B           │ 864.126 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Cost of revenue   │ 369.111 M         │ 367.515 M         │ 356.936 M         │ 429.096 M         │ 527.916 M         │ 411.098 M         │ 412.046 M  │ 443.685 M         │ 610.212 M         │ 489.562 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Gross profit      │ 218.403 M         │ 259.105 M         │ 194.926 M         │ 293.812 M         │ 375.272 M         │ 195.752 M         │ 226.231 M  │ 234.705 M         │ 448.983 M         │ 374.564 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Gross profit      │ 0.372             │ 0.413             │ 0.353             │ 0.406             │ 0.415             │ 0.323             │ 0.354      │ 0.346             │ 0.424             │ 0.433             │
│ ratio             │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Research and      │ 4.751 M           │ 5.648 M           │ 6.943 M           │ 10.005 M          │ 10.238 M          │ 11.361 M          │ 12.866 M   │ 12.362 M          │ 7.480 M           │ 7.262 M           │
│ development       │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ expenses          │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ General and       │ 50.798 M          │ 68.954 M          │ 62.322 M          │ 82.907 M          │ 115.757 M         │ 101.538 M         │ 107.650 M  │ 97.985 M          │ 79.268 M          │ 72.493 M          │
│ administrative    │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ expenses          │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Selling and       │ 30.020 M          │ 33.515 M          │ 36.033 M          │ 42.257 M          │ 49.338 M          │ 55.805 M          │ 57.263 M   │ 74.515 M          │ 42.603 M          │ 43.156 M          │
│ marketing         │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ expenses          │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Selling general   │ 80.818 M          │ 102.469 M         │ 98.355 M          │ 125.164 M         │ 165.095 M         │ 157.343 M         │ 164.913 M  │ 172.500 M         │ 121.871 M         │ 115.649 M         │
│ and               │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ administrative    │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ expenses          │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Other expenses    │ 0                 │ 0                 │ 0                 │ 0                 │ 0                 │ 0                 │ 0          │ 0                 │ 0                 │ 0                 │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Operating         │ 85.569 M          │ 108.117 M         │ 105.298 M         │ 135.169 M         │ 175.333 M         │ 168.704 M         │ 177.779 M  │ 184.862 M         │ 129.351 M         │ 122.911 M         │
│ expenses          │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Cost and expenses │ 454.680 M         │ 475.632 M         │ 462.234 M         │ 564.265 M         │ 703.249 M         │ 579.802 M         │ 589.825 M  │ 628.547 M         │ 739.563 M         │ 612.473 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Interest income   │ 814 K             │ 149 K             │ 395 K             │ 176 K             │ 0                 │ 0                 │ 0          │ 0                 │ 0                 │ 0                 │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Interest expense  │ 5.781 M           │ 12.261 M          │ 11.330 M          │ 13.704 M          │ -8.581 M          │ -11.168 M         │ -9.351 M   │ 11.213 M          │ 3.919 M           │ 2.135 M           │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Depreciation and  │ 16.730 M          │ 21.704 M          │ 30.893 M          │ 41.237 M          │ 50.213 M          │ 52.075 M          │ 53.859 M   │ 54.058 M          │ 31.575 M          │ 30.073 M          │
│ amortization      │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Ebitda            │ 147.724 M         │ 171.365 M         │ 120.741 M         │ 200.034 M         │ 232.938 M         │ 58.524 M          │ 73.246 M   │ 5.322 M           │ 361.937 M         │ 284.594 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Ebitdaratio       │ 0.251             │ 0.273             │ 0.219             │ 0.277             │ 0.258             │ 0.096             │ 0.115      │ 0.008             │ 0.342             │ 0.329             │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Operating income  │ 132.834 M         │ 150.988 M         │ 89.628 M          │ 158.643 M         │ 199.939 M         │ 27.048 M          │ 38.056 M   │ -48.819 M         │ 319.632 M         │ 251.653 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Operating income  │ 0.226             │ 0.241             │ 0.162             │ 0.219             │ 0.221             │ 0.045             │ 0.060      │ -0.072            │ 0.302             │ 0.291             │
│ ratio             │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Total other       │ -4.928 M          │ -14.266 M         │ -10.896 M         │ -13.550 M         │ -8.633 M          │ -9.431 M          │ -9.318 M   │ -11.130 M         │ -1.667 M          │ 733 K             │
│ income expenses   │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
│ net               │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Income before tax │ 127.906 M         │ 136.722 M         │ 78.732 M          │ 145.093 M         │ 191.306 M         │ 17.617 M          │ 28.738 M   │ -59.949 M         │ 317.965 M         │ 252.386 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Income before tax │ 0.218             │ 0.218             │ 0.143             │ 0.201             │ 0.212             │ 0.029             │ 0.045      │ -0.088            │ 0.300             │ 0.292             │
│ ratio             │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Income tax        │ 46.500 M          │ 48.095 M          │ 28.905 M          │ 51.135 M          │ 63.452 M          │ -2.511 M          │ 10.328 M   │ 1.281 M           │ 74.394 M          │ 57.892 M          │
│ expense           │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Net income        │ 78.713 M          │ 89.305 M          │ 49.613 M          │ 93.958 M          │ 127.854 M         │ 20.128 M          │ 18.410 M   │ -61.230 M         │ 252.049 M         │ 194.494 M         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Net income ratio  │ 0.134             │ 0.143             │ 0.090             │ 0.130             │ 0.142             │ 0.033             │ 0.029      │ -0.090            │ 0.238             │ 0.225             │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Eps               │ 1.210             │ 1.520             │ 0.920             │ 1.720             │ 2.290             │ 0.370             │ 0.340      │ -1.110            │ 4.620             │ 4.120             │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Epsdiluted        │ 1.180             │ 1.490             │ 0.900             │ 1.680             │ 2.250             │ 0.370             │ 0.330      │ -1.110            │ 4.550             │ 4.080             │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Weighted average  │ 65.155 M          │ 58.668 M          │ 53.988 M          │ 54.765 M          │ 55.930 M          │ 54.061 M          │ 54.483 M   │ 54.983 M          │ 54.613 M          │ 47.227 M          │
│ shs out           │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────┼───────────────────┼───────────────────┼───────────────────┤
│ Weighted average  │ 66.642 M          │ 60.114 M          │ 55.228 M          │ 55.965 M          │ 56.891 M          │ 54.834 M          │ 55.216 M   │ 54.983 M          │ 55.352 M          │ 47.728 M          │
│ shs out dil       │                   │                   │                   │                   │                   │                   │            │                   │                   │                   │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────┴───────────────────┴────────────┴───────────────────┴───────────────────┴───────────────────┘
                                                                                                  Final link
Fiscal Date Ending
2013                      https://www.sec.gov/Archives/edgar/data/1092796/000119312513270582/d522688d10k.htm
2014                      https://www.sec.gov/Archives/edgar/data/1092796/000119312514242483/d704464d10k.htm
2015                https://www.sec.gov/Archives/edgar/data/1092796/000156459015005183/swhc-10k_20150430.htm
2016                https://www.sec.gov/Archives/edgar/data/1092796/000156459016020629/swhc-10k_20160430.htm
2017                https://www.sec.gov/Archives/edgar/data/1092796/000156459017013115/aobc-10k_20170430.htm
2018                https://www.sec.gov/Archives/edgar/data/1092796/000156459018015882/aobc-10k_20180430.htm
2019                https://www.sec.gov/Archives/edgar/data/1092796/000156459019022862/aobc-10k_20190430.htm
2020                https://www.sec.gov/Archives/edgar/data/1092796/000156459020029954/swbi-10k_20200430.htm
2021                https://www.sec.gov/Archives/edgar/data/1092796/000156459021033352/swbi-10k_20210430.htm
2022                    https://www.sec.gov/Archives/edgar/data/1092796/000095017022012043/swbi-20220430.htm

                                                                                                                 Link
Fiscal Date Ending
2013                https://www.sec.gov/Archives/edgar/data/1092796/000119312513270582/0001193125-13-270582-index.htm
2014                https://www.sec.gov/Archives/edgar/data/1092796/000119312514242483/0001193125-14-242483-index.htm
2015                https://www.sec.gov/Archives/edgar/data/1092796/000156459015005183/0001564590-15-005183-index.htm
2016                https://www.sec.gov/Archives/edgar/data/1092796/000156459016020629/0001564590-16-020629-index.htm
2017                https://www.sec.gov/Archives/edgar/data/1092796/000156459017013115/0001564590-17-013115-index.htm
2018                https://www.sec.gov/Archives/edgar/data/1092796/000156459018015882/0001564590-18-015882-index.htm
2019                https://www.sec.gov/Archives/edgar/data/1092796/000156459019022862/0001564590-19-022862-index.htm
2020                https://www.sec.gov/Archives/edgar/data/1092796/000156459020029954/0001564590-20-029954-index.htm
2021                https://www.sec.gov/Archives/edgar/data/1092796/000156459021033352/0001564590-21-033352-index.htm
2022                https://www.sec.gov/Archives/edgar/data/1092796/000095017022012043/0000950170-22-012043-index.htm
```

The consistent delivery of dividends that increase over time is usually a good sign for investors. Mature companies with predictable revenue like utilities and regional banks, but also funds, pay regular dividends. `divs` will show the sixteen most recent dividend payments and the date of payment as a table. `divs -p` will display a chart of the complete dividend history. The graph below shows the dividend history of the SPDR Select Energy Sector Fund, XLE.

![XLE Historical Dividends](https://user-images.githubusercontent.com/85772166/175222538-39ec28d5-c308-438f-b014-7a98ff1726bb.png)