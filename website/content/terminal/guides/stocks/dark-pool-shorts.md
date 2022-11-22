---
title: Dark Pools & Short Data
keywords: ["darkpools", "dps", "dark", "pools", "dp", "short", "shorts", "naked", "selling", "sales", "SEC", "disclosure", "ATS", "OTC", "OTCE", "NMS", "borrowed", "shorted", "ftd", "fails-to-deliver", "volume"]
date: "05-30-2022"
type: guides
status: publish
excerpt: "The Introduction to Dark Pools & Short Data, within the Stocks menu, which explains how to use the menu and
provides a brief explanation of the features."
geekdocCollapseSection: true
---

The purpose of this menu is to provide the user with tools for gauging the level of short interest, FTD rate, and off-exchange volume in a <a href="https://www.law.cornell.edu/cfr/text/17/242.600" target="_blank">NMS security</a>. There are also commands for looking at market as a whole. Enter the submenu from the <a href="/terminal/guides/intros/stocks" target="_blank">Stocks menu</a> by typing, `dps`, and hitting `ENTER` (⏎).

<img alt="The Dark Pools Menu" src="https://user-images.githubusercontent.com/46355364/171151760-9f65424e-b4d6-41a7-b31f-e9bc1c723bd9.png"></img>

To use every feature in the Dark Pools menu, an API key for <a href="https://www.quandl.com/" target="_blank">Quandl</a> must be obtained (for free) and authorized on the local installation. See the <a href="/terminal/quickstart/keys" target="_blank">Getting Started Guide</a> for help setting up the API keys in the OpenBB Terminal. The four commands at the bottom of the menu rely on a loaded ticker while the six above do not.

### How to use

The commands which are not ticker-specific provide screener-like utility. A list of the most-shorted stocks, according to Yahoo Finance, is displayed with the `shorted` command. It should be noted that this menu is only able to provide data for SEC-regulated equities.

```
(🦋) /stocks/dps/ $ shorted

                                                              Most Shorted Stocks
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┓
┃ Symbol ┃ Name                             ┃ Price (Intraday) ┃ Change ┃ % Change ┃ Volume ┃ Avg Vol (3 month) ┃ Market Cap ┃ PE Ratio (TTM) ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━┩
│ APE    │ AMC Entertainment Holdings, Inc. │ 1.26             │ -0.01  │ -0.98%   │ 4.338M │ 17.588M           │ 4.229B     │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ BYND   │ Beyond Meat, Inc.                │ 12.58            │ -0.70  │ -5.27%   │ 1.288M │ 3.276M            │ 801.878M   │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ CVNA   │ Carvana Co.                      │ 7.11             │ 0.06   │ +0.85%   │ 5.11M  │ 14.16M            │ 1.263B     │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ BBBY   │ Bed Bath & Beyond Inc.           │ 3.18             │ 0.07   │ +2.25%   │ 3.209M │ 21.565M           │ 280.296M   │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ EVGO   │ EVgo, Inc.                       │ 6.53             │ 0.09   │ +1.48%   │ 305378 │ 1.999M            │ 1.733B     │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ UPST   │ Upstart Holdings, Inc.           │ 18.86            │ 0.30   │ +1.62%   │ 1.32M  │ 6.561M            │ 1.544B     │ 18.31          │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ RKT    │ Rocket Companies, Inc.           │ 7.41             │ 0.00   │ 0.00%    │ 275652 │ 3.426M            │ 14.726B    │ 4.11           │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ VTNR   │ Vertex Energy, Inc.              │ 8.16             │ 0.16   │ +1.97%   │ 435911 │ 3.23M             │ 617.268M   │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ MSTR   │ MicroStrategy Incorporated       │ 164.21           │ 6.99   │ +4.44%   │ 195437 │ 663078            │ 1.858B     │                │
├────────┼──────────────────────────────────┼──────────────────┼────────┼──────────┼────────┼───────────────────┼────────────┼────────────────┤
│ NVAX   │ Novavax, Inc.                    │ 17.93            │ -1.02  │ -5.38%   │ 1.434M │ 4.816M            │ 1.408B     │                │
└────────┴──────────────────────────────────┴──────────────────┴────────┴──────────┴────────┴───────────────────┴────────────┴────────────────┘
```

`hsi` is another <a href="https://highshortinterest.com" target="_blank">source</a> for the same list. There will be slight variations between the two.

```
(🦋) /stocks/dps/ $ hsi

                                                 Top Interest Stocks
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Ticker ┃ Company                        ┃ Exchange ┃ ShortInt ┃ Float   ┃ Outstd  ┃ Industry                       ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ BYND   │ Beyond Meat Inc                │ Nasdaq   │ 40.88%   │ 57.35M  │ 63.67M  │ Food Processing                │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ BBBY   │ Bed Bath & Beyond Inc.         │ Nasdaq   │ 40.32%   │ 76.43M  │ 80.36M  │ Retail (Specialty Non-Apparel) │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ CVNA   │ Carvana Co                     │ NYSE     │ 39.40%   │ 95.34M  │ 105.95M │ Retail (Specialty Non-Apparel) │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ UPST   │ Upstart Holdings Inc           │ Nasdaq   │ 35.89%   │ 68.88M  │ 81.88M  │ Consumer Lending               │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ MSTR   │ MicroStrategy Inc              │ Nasdaq   │ 35.13%   │ 9.34M   │ 9.35M   │ Software & Programming         │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ NKLA   │ Nikola Corporation             │ Nasdaq   │ 32.15%   │ 311.65M │ 478.85M │ Auto & Truck Manufacturers     │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ EVGO   │ Evgo Inc                       │ Nasdaq   │ 31.73%   │ 67.87M  │ 69.36M  │ Utilities - Electric           │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ W      │ Wayfair Inc                    │ NYSE     │ 31.26%   │ 71.00M  │ 80.65M  │ Retailers - Department Stores  │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ FUV    │ Arcimoto Inc                   │ Nasdaq   │ 31.14%   │ 38.00M  │ 46.09M  │ Auto & Truck Manufacturers     │
├────────┼────────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────┤
│ FFIE   │ Faraday Future Intelligent Ele │ Nasdaq   │ 29.03%   │ 168.93M │ 270.18M │ Auto & Truck Manufacturers     │
└────────┴────────────────────────────────┴──────────┴──────────┴─────────┴─────────┴────────────────────────────────┘
```

`prom` performs a linear regression to scan for tickers with growing trade activity on ATS tapes, reported to <a href="https://otctransparency.finra.org/otctransparency/AtsIssueData" target="_blank">FINRA</a>.

````
(🦋) /stocks/dps/ $ prom -n 50 -l 5 -t T1
Processing Tier T1 ...
Processing regression on 50 promising tickers ...
````

<img alt="Growing ATS Tier 1 NMS Trading Activity" src="https://user-images.githubusercontent.com/46355364/171168513-2d57fdd6-041f-4ba1-99b3-6168f2141193.png"></img>

Tier 2 NMS Tickers:
````
(🦋) /stocks/dps/ $ prom -n 50 -l 5 -t T2
Processing Tier T2 ...
Processing regression on 50 promising tickers ...
````

<img alt="Growing ATS Tier 2 NMS Trading Activity" src="https://user-images.githubusercontent.com/46355364/171168676-1fa22167-3312-4e06-b5f5-261b13c45cf8.png"></img>

Tier 3 OTCE Tickers:
````
(🦋) /stocks/dps/ $ prom -n 50 -l 5 -t OTCE
Processing Tier OTCE ...
Processing regression on 50 promising tickers ...
````

<img alt="Growing ATS OTCE NMS Trading Activity" src="https://user-images.githubusercontent.com/46355364/171168812-2e8dce0c-c81a-4de8-9442-7f1e2ae76da8.png"></img>

`pos` provides a summary for the last reported trading day (information is updated in the early evening). Position represents a rolling twenty-day total and directional trends can be identified by watching the changes over time. Adding the `-a` flag will sort the list from the bottom up - the most negative - and creates a fuller picture when watching in tandom with the positive side of the ledger. Monitor the rate of change in position sizes, or a reversal in directional flow. This <a href="https://squeezemetrics.com/monitor/download/pdf/short_is_long.pdf?" target="_blank">white paper</a>, written by SqueezeMetrics, sheds some light on the trading activity reported here.

````
(🦋) /stocks/dps/ $ pos -l 5

                                                      Data for: 2022-11-21
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┓
┃ Ticker ┃ Short Vol. [1M] ┃ Short Vol. % ┃ Net Short Vol. [1M] ┃ Net Short Vol. ($100M) ┃ DP Position [1M] ┃ DP Position ($1B) ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━┩
│ SPY    │ 9.43            │ 57.60        │ 2.49                │ 9.82                   │ 108.69           │ 42.19             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ QQQ    │ 11.20           │ 67.38        │ 5.78                │ 16.28                  │ 135.92           │ 37.68             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ NVDA   │ 13.29           │ 55.18        │ 2.49                │ 3.82                   │ 47.99            │ 7.87              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ IWM    │ 6.10            │ 80.04        │ 4.58                │ 8.36                   │ 34.50            │ 6.30              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ HYG    │ 3.45            │ 62.23        │ 1.36                │ 1.01                   │ 85.45            │ 6.29              │
└────────┴─────────────────┴──────────────┴─────────────────────┴────────────────────────┴──────────────────┴───────────────────┘
````

The other end of the spectrum:

````
(🦋) /stocks/dps/ $ pos -l 5 -a

                                                      Data for: 2022-11-21
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┓
┃ Ticker ┃ Short Vol. [1M] ┃ Short Vol. % ┃ Net Short Vol. [1M] ┃ Net Short Vol. ($100M) ┃ DP Position [1M] ┃ DP Position ($1B) ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━┩
│ AMZN   │ 15.43           │ 37.30        │ -10.51              │ -9.72                  │ -223.82          │ -21.46            │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ TSLA   │ 23.13           │ 44.49        │ -5.73               │ -9.61                  │ -106.38          │ -21.40            │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ MSFT   │ 3.35            │ 27.08        │ -5.67               │ -13.73                 │ -60.46           │ -14.07            │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ META   │ 5.27            │ 54.26        │ 0.83                │ 0.91                   │ -121.48          │ -11.59            │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ SQQQ   │ 18.69           │ 38.33        │ -11.38              │ -5.38                  │ -182.02          │ -9.95             │
└────────┴─────────────────┴──────────────┴─────────────────────┴────────────────────────┴──────────────────┴───────────────────┘
````

Call on the help dialogue for every command by attaching, `-h` to the command. The optional arguments give the user flexibility to sort the columns, print the raw data, or export to a file.

### Examples

The cost-to-borrow is used as a proxy-measurement for an equity's specialness. `ctb` shows the  most expensive equities to short, and the number shares available to short, on Interactive Brokers.

````
(🦋) /stocks/dps/ $ ctb -n 5

      Highest Cost to Borrow
┏━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┓
┃ Symbol  ┃ Fees      ┃ Available ┃
┡━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━┩
│ PCF     │ 822.316%  │ 100000    │
├─────────┼───────────┼───────────┤
│ PIXY    │ 654.744%  │ 1000      │
├─────────┼───────────┼───────────┤
│ EPR PRE │ 653.3814% │ 80000     │
├─────────┼───────────┼───────────┤
│ EFSH    │ 625.3763% │ 5000      │
├─────────┼───────────┼───────────┤
│ HTCR    │ 504.6923% │ 20000     │
└─────────┴───────────┴───────────┘
````

How many tickers have a borrow rate above 100%? Set the limit to a high number and export the data to a spreadsheet.

````
(🦋) /stocks/dps/ $ ctb -n 5000 --export xlsx

Saved file: /exports/20220530_130058_stocks_dark_pool_shorts_cost_to_borrow.xlsx
````

Cross reference that list with the `sidtc` command. Days-to-cover is the approximate number of days it would take to cover those shorts if the amount and proportion of volume were to remain constant. Use the optional arguments to sort the columns.

```
(🦋) /stocks/dps/ $ sidtc -s si

                      Data for: 2022-08-31
┏━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┓
┃ Ticker ┃ Float Short % ┃ Days to Cover ┃ Short Interest [1M] ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━┩
│ MVIS   │ 25.22         │ 19.94         │ 41.34               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ IBRX   │ 24.92         │ 23.64         │ 20.19               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ PCT    │ 15.03         │ 21.08         │ 17.54               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ LWLG   │ 15.86         │ 22.85         │ 17.51               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ CORT   │ 18.33         │ 33.83         │ 17.35               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ GOSS   │ 23.38         │ 22.09         │ 16.13               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ VIEW   │ 10.16         │ 29.60         │ 15.90               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ ERAS   │ 15.79         │ 31.64         │ 15.75               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ VUZI   │ 24.43         │ 20.13         │ 14.42               │
├────────┼───────────────┼───────────────┼─────────────────────┤
│ LYEL   │ 6.92          │ 20.04         │ 14.32               │
└────────┴───────────────┴───────────────┴─────────────────────┘
```

Load AAPL and request a 1-year chart of the net short volume and position. This provides the individual ticker data corresponding with the `pos` command.

````
(🦋) /stocks/dps/ $ load AAPL

Loading Daily AAPL stock with starting period 2019-05-28 for analysis.

Datetime: 2022 May 30 14:59
Timezone: America/New_York
Currency: USD
Market:   CLOSED
Company:  Apple Inc.

(🦋) /stocks/dps/ $ spos
````

<img alt="spos" src="https://user-images.githubusercontent.com/46355364/171170008-fafb8adc-6bcd-4050-9187-7a0674203585.png"></img>

Prolonged periods where the net short volume is above 50% are notable.

````
(🦋) /stocks/dps/ $ psi
````

<img alt="spos" src="https://user-images.githubusercontent.com/46355364/171170143-9f9f6f93-4068-43e1-a8f1-71f3be029235.png"></img>

See the aggregate sum total of fail-to-delivers, with the historical price, with the `ftd` command.

````
(🦋) /stocks/dps/ $ ftd -s 2020-05-30
````

<img alt="ftd" src="https://user-images.githubusercontent.com/46355364/171170293-c8ea1a43-d9e1-4684-8f7c-fc4e8978d3f9.png"></img>

The data from `dpotc`, statistics for individual NMS tickers, shows weekly OTC and ATS trade volume with the average lot size, which is reported on a lagging schedule.

````
(🦋) /stocks/dps/ $ dpotc
````

<img alt="dpotc" src="https://user-images.githubusercontent.com/46355364/171170366-234aea6b-fe0d-4735-8942-4a672d0683ef.png"></img>

Run a live demo of these features by entering `exe routines/darkpool_demo.openbb` into the Terminal from the home screen.