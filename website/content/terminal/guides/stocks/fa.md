---
title: Fundamental Analysis
keywords: ["fundamentals", "fundamental", "fa", "ratios", "earnings", "balance", "income", "cash", "statement", "statements", "sec", "multiples", "price", "ebitda", "ebitdam", "revenue", "quarter", "annual", "change", "company", "performance", "filing", "filings", "10K", "8K", "audit", "audited"]
date: "2022-06-20"
type: guides
status: publish
excerpt: "This guide introduces the Fundamental Analysis menu within the Stocks menu, briefly explains the features, and provides examples in context."
geekdocCollapseSection: true
---

The Fundamental Analysis menu is a set of tools for measuring a company's intrinsic value, relative to the market price. Functions within this menu are generally microeconomic factors. The purpose is to harness data reported in financial statements and estimate the tangible value of a share. Revenue of companies with a long public history are easier to forecast, and the consensus of many analysts will indicate the level of confidence in future expectations. When people refer to "P/E ratios", "multiples", or "institutional holders", they are speaking of fundamentals. When people say, "...this stock is detached from its fundamentals!", they are talking about the balance sheet. In addition to these features, there are <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/screener/" target="_blank">screeners</a> to compare fundamentals across groups of companies.

There are three API tokens (free) required to use every feature in this menu:
  - <a href="https://site.financialmodelingprep.com/developer/docs/" target="_blank">FMP</a>
  - <a href="https://polygon.io" target="_blank">Polygon</a>
  - <a href="https://www.alphavantage.co/support/#api-key" target="_blank">Alpha Vantage</a>

Set the obtained tokens in the terminal with the `/keys` menu. Refer to the <a href="https://openbb-finance.github.io/OpenBBTerminal/#accessing-other-sources-of-data-via-api-keys" target="_blank">Getting Started Guide</a> for more information about this.

<h2>How to use the Fundamental Analysis Menu</h2>

Enter the submenu from the <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/" target="_blank">Stocks Menu</a>, with a ticker loaded.

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
│ EPS (ttm)          │ 4.95                         │
├────────────────────┼──────────────────────────────┤
│ Insider Own        │ 0.90%                        │
├────────────────────┼──────────────────────────────┤
│ Shs Outstand       │ 46.76M                       │
├────────────────────┼──────────────────────────────┤
│ Perf Week          │ -9.53%                       │
├────────────────────┼──────────────────────────────┤
│ Market Cap         │ 601.03M                      │
├────────────────────┼──────────────────────────────┤
│ Forward P/E        │ 5.77                         │
├────────────────────┼──────────────────────────────┤
│ EPS next Y         │ 2.27                         │
├────────────────────┼──────────────────────────────┤
│ Insider Trans      │ 0.08%                        │
├────────────────────┼──────────────────────────────┤
│ Shs Float          │ 44.50M                       │
├────────────────────┼──────────────────────────────┤
│ Perf Month         │ -6.43%                       │
├────────────────────┼──────────────────────────────┤
│ Income             │ 247.30M                      │
├────────────────────┼──────────────────────────────┤
│ PEG                │ 0.18                         │
├────────────────────┼──────────────────────────────┤
│ EPS next Q         │ 0.69                         │
├────────────────────┼──────────────────────────────┤
│ Inst Own           │ 58.20%                       │
├────────────────────┼──────────────────────────────┤
│ Short Float        │ 5.95%                        │
├────────────────────┼──────────────────────────────┤
│ Perf Quarter       │ -20.36%                      │
├────────────────────┼──────────────────────────────┤
│ Sales              │ 1.01B                        │
├────────────────────┼──────────────────────────────┤
│ P/S                │ 0.60                         │
├────────────────────┼──────────────────────────────┤
│ EPS this Y         │ 774.90%                      │
├────────────────────┼──────────────────────────────┤
│ Inst Trans         │ 1.24%                        │
├────────────────────┼──────────────────────────────┤
│ Short Ratio        │ 3.33                         │
├────────────────────┼──────────────────────────────┤
│ Perf Half Y        │ -23.17%                      │
├────────────────────┼──────────────────────────────┤
│ Book/sh            │ 6.98                         │
├────────────────────┼──────────────────────────────┤
│ P/B                │ 1.88                         │
├────────────────────┼──────────────────────────────┤
│ EPS growth next Y  │ -44.70%                      │
├────────────────────┼──────────────────────────────┤
│ ROA                │ 51.70%                       │
├────────────────────┼──────────────────────────────┤
│ Target Price       │ 21.67                        │
├────────────────────┼──────────────────────────────┤
│ Perf Year          │ -54.61%                      │
├────────────────────┼──────────────────────────────┤
│ Cash/sh            │ 2.34                         │
├────────────────────┼──────────────────────────────┤
│ P/C                │ 5.60                         │
├────────────────────┼──────────────────────────────┤
│ EPS next 5Y        │ 15.00%                       │
├────────────────────┼──────────────────────────────┤
│ ROE                │ 79.70%                       │
├────────────────────┼──────────────────────────────┤
│ 52W Range          │ 13.17 - 39.61                │
├────────────────────┼──────────────────────────────┤
│ Perf YTD           │ -26.40%                      │
├────────────────────┼──────────────────────────────┤
│ Dividend           │ 0.32                         │
├────────────────────┼──────────────────────────────┤
│ P/FCF              │ 3.03                         │
├────────────────────┼──────────────────────────────┤
│ EPS past 5Y        │ 21.20%                       │
├────────────────────┼──────────────────────────────┤
│ ROI                │ 80.10%                       │
├────────────────────┼──────────────────────────────┤
...continued...
````
`analysis` reads SEC filings with NLP and extracts the most important statements.

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
`warnings` uses <a href="https://www.drwealth.com/gone-fishing-with-buffett-by-sean-seah/comment-page-1/" target="_blank">Sean Seah's signals</a> to highlight certain of qualities a business.

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

<h2>The FMP Submenu</h2>

This submenu utilizes the <a href="https://site.financialmodelingprep.com/developer/docs/" target="_blank">Financial Modeling Prep</a> API exclusively. The information provided here may seem redundant at first glance; however, consulting a diverse set of sources will lead to better-informed decisions.

<img width="1164" alt="The Financial Modeling Prep Submenu" src="https://user-images.githubusercontent.com/85772166/175222069-bd0470ac-75b9-450b-a993-016022ef6828.png"></img>

`enterprise` displays the components of the enterprise value.
````
(🦋) /stocks/fa/fmp/ $ enterprise

                SWBI Enterprise
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┓
┃                                 ┃ 2021      ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━┩
│ Symbol                          │ SWBI      │
├─────────────────────────────────┼───────────┤
│ Stock price                     │ 21.260    │
├─────────────────────────────────┼───────────┤
│ Number of shares                │ 54.613 M  │
├─────────────────────────────────┼───────────┤
│ Market capitalization           │ 1.161 B   │
├─────────────────────────────────┼───────────┤
│ Add total debt                  │ 41.182 M  │
├─────────────────────────────────┼───────────┤
│ Minus cash and cash equivalents │ 113.017 M │
├─────────────────────────────────┼───────────┤
│ Enterprise value                │ 1.089 B   │
└─────────────────────────────────┴───────────┘
````
Use `growth` to focus on the rate of change.
````
(🦋) /stocks/fa/fmp/ $ growth

                       SWBI Growth
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃                                              ┃ 2021   ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│ Period                                       │ FY     │
├──────────────────────────────────────────────┼────────┤
│ Revenue growth                               │ 0.561  │
├──────────────────────────────────────────────┼────────┤
│ Gross profit growth                          │ 0.913  │
├──────────────────────────────────────────────┼────────┤
│ Ebitgrowth                                   │ 7.547  │
├──────────────────────────────────────────────┼────────┤
│ Operating income growth                      │ 7.547  │
├──────────────────────────────────────────────┼────────┤
│ Net income growth                            │ 5.116  │
├──────────────────────────────────────────────┼────────┤
│ Epsgrowth                                    │ 5.162  │
├──────────────────────────────────────────────┼────────┤
│ Epsdiluted growth                            │ 5.099  │
├──────────────────────────────────────────────┼────────┤
│ Weighted average shares growth               │ -0.007 │
├──────────────────────────────────────────────┼────────┤
│ Weighted average shares diluted growth       │ 0.007  │
├──────────────────────────────────────────────┼────────┤
│ Dividendsper share growth                    │ 0      │
├──────────────────────────────────────────────┼────────┤
│ Operating cash flow growth                   │ 2.321  │
├──────────────────────────────────────────────┼────────┤
│ Free cash flow growth                        │ 2.648  │
├──────────────────────────────────────────────┼────────┤
│ Ten y revenue growth per share               │ 1.997  │
├──────────────────────────────────────────────┼────────┤
│ Five y revenue growth per share              │ 0.469  │
├──────────────────────────────────────────────┼────────┤
│ Three y revenue growth per share             │ 0.728  │
├──────────────────────────────────────────────┼────────┤
...continued...
````
<h2>Examples</h2>

`cal` will show the upcoming earnings date, and the averages of same-period past-performance.
````
(🦋) /stocks/fa/ $ cal

                                              SWBI Calendar Earnings
┏━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ Earnings Date ┃ Earnings Average ┃ Earnings Low ┃ Earnings High ┃ Revenue Average ┃ Revenue Low ┃ Revenue High ┃
┡━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ 06/23/2022    │ 0.690            │ 0.640        │ 0.730         │ 179.850 M       │ 176.840 M   │ 185.700 M    │
└───────────────┴──────────────────┴──────────────┴───────────────┴─────────────────┴─────────────┴──────────────┘
````
`dupont` is a chart detailing the components of a company's return on equity.

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

Financial statements default to yearly reports, adding `-q` will flag for quarterly statements with `-l n` being the number of quarters to show.

<img width="1368" alt="SWBI Quarterly Income Statements" src="https://user-images.githubusercontent.com/85772166/175222488-1f18fb94-4ec6-4ecb-bbbb-d8974b1f0358.png"></img>

The consistent delivery of dividends that increase over time is usually a good sign for investors. Mature companies with predictable revenue like utilities and regional banks, but also funds, pay regular dividends. `divs` will show the sixteen most recent dividend payments and the date of payment as a table. `divs -p` will display a chart of the complete dividend history. The graph below shows the dividend history of the SPDR Select Energy Sector Fund, XLE.

![XLE Historical Dividends](https://user-images.githubusercontent.com/85772166/175222538-39ec28d5-c308-438f-b014-7a98ff1726bb.png)

To play a demonstration of this menu in the Terminal first, acquire and enter the three API keys named near the top of this page, then run `exe fa_demo.openbb` from the main menu.

Back to the <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/" target="_blank">Stocks Menu Guide</a>
