---
title: Due Diligence
keywords: ["dd", "due", "diligence", "research", "company", "ticker", "analyst", "rating", "rot", "pt", "est", "sec", "supplier", "customer", "arktrades", "ratings", "analysts", "filings", "form", "forms", "customers", "suppliers"]
date: "2022-06-01"
type: guides
status: publish
excerpt: "This guide introduces the Due Diligence menu within the Stocks menu, explains the features briefly, then provides examples."
geekdocCollapseSection: true
---

The Due Diligence submenu, located within the <a href="/terminal/guides/intros/stocks" target="_blank">`Stocks menu`</a>, is primarily for supplementing fundamental analysis with information such as analyst ratings and price targets over time, earnings estimates, SEC filings and business-to-business customers and suppliers. Entering the submenu requires having a ticker <a href="terminal/reference/#explanation-of-commands" target="_blank">loaded</a> from the `Stocks` menu. With a stock selected, type `dd` into the command line and press `enter`.

![The Due Diligence submenu](https://user-images.githubusercontent.com/85772166/176110875-e23b0016-00a9-4fa0-b7e1-020a344c40ce.png)

### How to use

With the same company, as loaded above, `sec -l 20` prints a table of the last twenty SEC filings from the company, and provides a link to a hosted document on <a href="https://marketwatch.com" target="_blank">MarketWatch</a>.

```
(🦋) /stocks/dd/ $ sec -l 5

                                                                       SEC Filings
┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃            ┃ Document Date ┃ Type ┃ Category          ┃ Amended ┃ Link                                                                                ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ 11/03/2022 │ 09/30/2022    │ 10-Q │ Quarterly Reports │         │ https://www.marketwatch.com/investing/stock/cf/financials/secfilings?docid=16174027 │
├────────────┼───────────────┼──────┼───────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ 11/02/2022 │ 11/02/2022    │ 8-K  │ Special Events    │         │ https://www.marketwatch.com/investing/stock/cf/financials/secfilings?docid=16172018 │
├────────────┼───────────────┼──────┼───────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ 11/02/2022 │ 11/02/2022    │ 8-K  │ Special Events    │         │ https://www.marketwatch.com/investing/stock/cf/financials/secfilings?docid=16171608 │
├────────────┼───────────────┼──────┼───────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ 08/02/2022 │ 06/30/2022    │ 10-Q │ Quarterly Reports │         │ https://www.marketwatch.com/investing/stock/cf/financials/secfilings?docid=15984714 │
├────────────┼───────────────┼──────┼───────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ 08/01/2022 │ 08/01/2022    │ 8-K  │ Special Events    │         │ https://www.marketwatch.com/investing/stock/cf/financials/secfilings?docid=15982380 │
└────────────┴───────────────┴──────┴───────────────────┴─────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```

`pt` displays a chart of historical adjusted closing prices and price targets. `pt --raw` prints a table, `pt --export xlsx` exports a spreadsheet, while `pt -l [n]` limits the number of price targets to return to `n`.

![Historical price targets for CF Industries](https://user-images.githubusercontent.com/85772166/176111207-4fe741a8-df49-4cbb-8216-94edebde77b7.png)

### Examples

A new ticker can be loaded directly from the Due Diligence submenu; for example, `load tsla`. With `TSLA` loaded, `arktrades -l 20`, shows the last twenty trades across all ARK funds.

````
(🦋) /stocks/dd/ $ arktrades -l 5

                                                  ARK Trades
┏━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━┓
┃            ┃ shares ┃ weight ┃ fund ┃ direction ┃ everything.profile.companyName ┃ Close ($) ┃ Total ($1M) ┃
┡━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━┩
│ 2022-11-15 │ 4000   │ 0.08   │ ARKQ │ Buy       │ Tesla, Inc.                    │ nan       │ nan         │
├────────────┼────────┼────────┼──────┼───────────┼────────────────────────────────┼───────────┼─────────────┤
│ 2022-11-09 │ 2909   │ 0.05   │ ARKW │ Buy       │ Tesla, Inc.                    │ 177.59    │ 0.52        │
├────────────┼────────┼────────┼──────┼───────────┼────────────────────────────────┼───────────┼─────────────┤
│ 2022-11-09 │ 9173   │ 0.19   │ ARKQ │ Buy       │ Tesla, Inc.                    │ 177.59    │ 1.63        │
├────────────┼────────┼────────┼──────┼───────────┼────────────────────────────────┼───────────┼─────────────┤
│ 2022-11-09 │ 27594  │ 0.08   │ ARKK │ Buy       │ Tesla, Inc.                    │ 177.59    │ 4.90        │
├────────────┼────────┼────────┼──────┼───────────┼────────────────────────────────┼───────────┼─────────────┤
│ 2022-10-03 │ 108380 │ 0.35   │ ARKK │ Buy       │ Tesla, Inc.                    │ 242.40    │ 26.27       │
└────────────┴────────┴────────┴──────┴───────────┴────────────────────────────────┴───────────┴─────────────┘
````

Any company can be loaded in, for example Robinhood with `load HOOD`. Then, you can export the history of HOOD trades for further analysis. `arktrades --export xlsx`

![Robinhood trades across all ARK funds, exported](https://user-images.githubusercontent.com/85772166/176111475-2ba12aca-c0ba-4eb4-9751-dbd09fdd384c.png)

Also, the ability to show future earning estimations with `est`.

```
(🦋) /stocks/dd/ $ est -e quarterearnings

                                         Quarterly Earnings Estimates
┏━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃                  ┃ Previous Quarter ┃ Current Quarter ┃ Next Quarter    ┃ Current Year    ┃ Next Year       ┃
┡━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ Date             │ ending 09/30/22  │ ending 12/31/22 │ ending 03/31/23 │ ending 12/31/22 │ ending 12/31/23 │
├──────────────────┼──────────────────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ No. of Analysts  │ 11               │ 8               │ -               │ 10              │ 12              │
├──────────────────┼──────────────────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Average Estimate │ -0.321 USD       │ -0.150 USD      │ -               │ -1.158 USD      │ -0.103 USD      │
├──────────────────┼──────────────────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Year Ago         │ -2.060 USD       │ -0.490 USD      │ -               │ -7.490 USD      │ -1.158 USD      │
├──────────────────┼──────────────────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Publish Date     │ 11/2/2022        │ 1/26/2023       │ -               │ -               │ -               │
└──────────────────┴──────────────────┴─────────────────┴─────────────────┴─────────────────┴─────────────────┘
(🦋) /stocks/dd/ $ est

                      Annual Earnings Estimates
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┳━━━━━━━━┓
┃                                ┃ 2022   ┃ 2023   ┃ 2024   ┃ 2025   ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━╇━━━━━━━━┩
│ Revenue                        │ 1,372  │ 1,899  │ 2,162  │ 2,434  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Dividend                       │ 0.00   │ 0.00   │ 0.00   │ 0.00   │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Dividend Yield (in %)          │ -      │ -      │ -      │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ EPS                            │ -1.16  │ -      │ -0.10  │ 0.17   │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ P/E Ratio                      │ -7.95  │ -33.78 │ -89.33 │ 53.05  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ EBIT                           │ -993   │ -497   │ -326   │ 132    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ EBITDA                         │ -140   │ 307    │ 456    │ 579    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Net Profit                     │ -1,010 │ -429   │ -243   │ -58    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Net Profit Adjusted            │ -221   │ -89    │ 96     │ 494    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Pre-Tax Profit                 │ -1,009 │ -484   │ -200   │ 140    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Net Profit (Adjusted)          │ -998   │ -589   │ -645   │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ EPS (Non-GAAP) ex. SOE         │ -0.61  │ 0.02   │ 0.21   │ 0.45   │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ EPS (GAAP)                     │ -1.18  │ -0.36  │ -0.15  │ -0.19  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Gross Income                   │ -      │ -      │ -      │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Cash Flow from Investing       │ -54    │ -29    │ -33    │ -11    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Cash Flow from Operations      │ 628    │ 192    │ 439    │ 1,483  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Cash Flow from Financing       │ -4     │ 44     │ 45     │ 46     │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Cash Flow per Share            │ -1.11  │ 0.19   │ 0.56   │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Free Cash Flow                 │ 596    │ 163    │ 406    │ 1,472  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Free Cash Flow per Share       │ -1.25  │ 0.16   │ 0.87   │ 1.58   │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Book Value per Share           │ 7.65   │ 7.67   │ 10.58  │ 6.82   │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Net Debt                       │ -2,314 │ -2,314 │ -2,314 │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Research & Development Exp.    │ 828    │ 816    │ 861    │ 887    │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Capital Expenditure            │ 31     │ 29     │ 33     │ 11     │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Selling, General & Admin. Exp. │ 2,354  │ 2,286  │ 2,576  │ -      │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Shareholder’s Equity           │ 7,010  │ 7,107  │ 11,227 │ 6,845  │
├────────────────────────────────┼────────┼────────┼────────┼────────┤
│ Total Assets                   │ 23,590 │ 24,209 │ 24,837 │ 36,691 │
└────────────────────────────────┴────────┴────────┴────────┴────────┘
(🦋) /stocks/dd/ $
```

Or check recommendations from several investment banks with `analyst`:

```
(🦋) /stocks/dd/ $ analyst

                                            Display Analyst Ratings
┏━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━┓
┃            ┃ category  ┃ analyst           ┃ rating                      ┃ target ┃ target_from ┃ target_to ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━┩
│ 2022-08-31 │ Downgrade │ Barclays          │ Equal Weight -> Underweight │ 10.00  │ nan         │ nan       │
├────────────┼───────────┼───────────────────┼─────────────────────────────┼────────┼─────────────┼───────────┤
│ 2022-06-27 │ Upgrade   │ Goldman           │ Sell -> Neutral             │ nan    │ 11.50       │ 9.50      │
├────────────┼───────────┼───────────────────┼─────────────────────────────┼────────┼─────────────┼───────────┤
│ 2022-06-15 │ Downgrade │ Atlantic Equities │ Neutral -> Underweight      │ nan    │ 15.00       │ 5.00      │
├────────────┼───────────┼───────────────────┼─────────────────────────────┼────────┼─────────────┼───────────┤
│ 2022-04-08 │ Downgrade │ Goldman           │ Neutral -> Sell             │ nan    │ 15.00       │ 13.00     │
├────────────┼───────────┼───────────────────┼─────────────────────────────┼────────┼─────────────┼───────────┤
│ 2022-03-30 │ Initiated │ Morgan Stanley    │ Equal-Weight                │ 15.00  │ nan         │ nan       │
└────────────┴───────────┴───────────────────┴─────────────────────────────┴────────┴─────────────┴───────────┘
```