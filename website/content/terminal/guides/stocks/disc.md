---
title: Discovery
keywords: ["stocks", "discovery", "disc", "menu", "submenu", "pipo", "fipo", "gainers", "losers", "ugs", "gtech", "active", "ulc", "asc", "ford", "arkord", "upcoming", "trending", "cnews", "lowfloat", "hotpenny", "rtat", "divcal", "dividends", "short", "trending", "news"]
date: "2022-05-30"
type: guides
status: publish
excerpt: "Introducing the Discovery menu, within the Stocks menu. This guide will empower the user to get the most
out of this set of features."
geekdocCollapseSection: true
---
The set of features within the Stocks Discovery submenu provides tools for discovering trade setups, for following trends, and for staying up with current events. Enter the menu from the <a href="/terminal/guides/intros/stocks/" target="_blank">Stocks menu</a> by typing, `disc`, and pressing, `ENTER` (⏎). Absolute path jumping is possible from anywhere, to anywhere. For example, jumping from the Portfolio Optimization submenu to the Stocks Discovery submenu:

<img alt="Absolute path jumping to the Stocks Discovery submenu" src="https://user-images.githubusercontent.com/46355364/171173438-0bc7569e-1627-41a6-b9dc-5f5682fc2436.png"></img>

### How to use

The help dialogue, for any command, is displayed by attaching, `-h`, to the string; i.e., `divcal -h`. This menu will be one of the easiest to get comfortable with a command-line interface.  All outputs from commands in this menu are text and tables. There are no charts or images generated. Exports, where available, can be formatted as csv, json, or xlsx files.

### Examples

The dividend calendar can show any single date.

````
(🦋) /stocks/disc/ $ divcal -d 2022-06-02 -l 5

                                            Dividend Calendar for 2022-06-02
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃ Name                           ┃ Symbol ┃ Ex-Dividend Date ┃ Payment Date ┃ Record Date ┃ Dividend ┃ Annual Dividend ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ BHP Group Limited              │ BHP    │ 06/02/2022       │ N/A          │ N/A         │ 7.75     │ 6.00            │
├────────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ BioNTech SE                    │ BNTX   │ 06/02/2022       │ 06/17/2022   │ 06/03/2022  │ 3.08     │ 1.53            │
├────────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Sociedad Quimica y Minera S.A. │ SQM    │ 06/02/2022       │ 06/23/2022   │ 06/03/2022  │ 2.31     │ 9.25            │
├────────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Star Bulk Carriers Corp.       │ SBLK   │ 06/02/2022       │ 06/16/2022   │ 06/03/2022  │ 1.65     │ 6.60            │
├────────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Linde plc                      │ LIN    │ 06/02/2022       │ 06/17/2022   │ 06/03/2022  │ 1.17     │ 4.68            │
└────────────────────────────────┴────────┴──────────────────┴──────────────┴─────────────┴──────────┴─────────────────┘
````

See Cathie Wood's trades and sort by different fields such as Fund, weighting, buy-only, or sell-only.

```
(🦋) /stocks/disc/ $ arkord -b


                                       Orders by ARK Investment Management LLC
┏━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━┳━━━━━━┳━━━━━━━━┳━━━━━━━━━┓
┃ Date       ┃ Ticker ┃ Direction ┃ Volume   ┃ Open  ┃ Close ┃ High  ┃ Low   ┃ Total      ┃ Fund ┃ Weight ┃ Shares  ┃
┡━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━╇━━━━━━╇━━━━━━━━╇━━━━━━━━━┩
│ 2022-11-21 │ QSI    │ Buy       │ 922200   │ 3.00  │ 2.88  │ 3.00  │ 2.86  │ 1622160.06 │ ARKG │ 0.0705 │ 563250  │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-21 │ GBTC   │ Buy       │ 16232500 │ 7.95  │ 8.28  │ 8.43  │ 7.46  │ 1465104.55 │ ARKW │ 0.1293 │ 176945  │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-21 │ DNA    │ Buy       │ 34919600 │ 2.16  │ 2.09  │ 2.19  │ 2.04  │ 8328568.15 │ ARKK │ 0.108  │ 3984961 │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-21 │ DNA    │ Buy       │ 34919600 │ 2.16  │ 2.09  │ 2.19  │ 2.04  │ 6335715.61 │ ARKG │ 0.2683 │ 3031443 │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-21 │ VUZI   │ Buy       │ 547300   │ 4.56  │ 4.46  │ 4.62  │ 4.39  │ 752156.71  │ ARKQ │ 0.0838 │ 168645  │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-18 │ DNA    │ Buy       │ 21118300 │ 2.20  │ 2.19  │ 2.21  │ 2.15  │ 2247056.13 │ ARKG │ 0.0933 │ 1026053 │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-18 │ VUZI   │ Buy       │ 538300   │ 4.64  │ 4.62  │ 4.77  │ 4.56  │ 252362.87  │ ARKQ │ 0.0277 │ 54624   │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-18 │ SSYS   │ Buy       │ 397900   │ 14.48 │ 13.95 │ 14.55 │ 13.90 │ 300496.95  │ ARKX │ 0.1099 │ 21541   │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-18 │ DNA    │ Buy       │ 21118300 │ 2.20  │ 2.19  │ 2.21  │ 2.15  │ 2870825.09 │ ARKK │ 0.0358 │ 1310879 │
├────────────┼────────┼───────────┼──────────┼───────┼───────┼───────┼───────┼────────────┼──────┼────────┼─────────┤
│ 2022-11-18 │ COIN   │ Buy       │ 20237200 │ 48.80 │ 45.26 │ 49.00 │ 44.31 │ 1671994.86 │ ARKW │ 0.1463 │ 36942   │
└────────────┴────────┴───────────┴──────────┴───────┴───────┴───────┴───────┴────────────┴──────┴────────┴─────────┘
```

Check the upcoming earnings schedule using, `upcoming`:

```
(🦋) /stocks/disc/ $ upcoming

      Upcoming Earnings Releases
┏━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃      ┃ Earnings on 2022-11-22       ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ ADI  │ Analog Devices, Inc.         │
├──────┼──────────────────────────────┤
│ VIVO │ Meridian Bioscience, Inc.    │
├──────┼──────────────────────────────┤
│ JACK │ Jack in the Box Inc.         │
├──────┼──────────────────────────────┤
│ WMG  │ Warner Music Group Corp.     │
├──────┼──────────────────────────────┤
│ ROAD │ Construction Partners, Inc.  │
├──────┼──────────────────────────────┤
│ KMDA │ Kamada Ltd.                  │
├──────┼──────────────────────────────┤
│ EPOW │ Sunrise New Energy Co., Ltd. │
├──────┼──────────────────────────────┤
│ IMBI │ iMedia Brands, Inc.          │
└──────┴──────────────────────────────┘
```

Browse the news by category from <a href="https://seekingalpha.com" target="_blank">Seeking Alpha</a> with `cnews`:

```
(🦋) /stocks/disc/ $ cnews
2022-11-22 11:19:52 - 3910576 - S&P, Dow, Nasdaq move higher after rough start to week; yields dip
https://seekingalpha.com/news/3910576-sp-500-nasdaq-dow-jones-stock-market-yields

2022-11-22 10:13:15 - 3910538 - Revenge of the malls: Retailers rally after earnings suggest holiday sales may be better than feared
https://seekingalpha.com/news/3910538-revenge-of-the-malls-retailers-rally-after-earnings-suggest-holiday-sales-may-be-better-than-feared

2022-11-21 17:38:03 - 3910267 - Moving quickly, Iger launching Disney restructuring
https://seekingalpha.com/news/3910267-moving-quickly-iger-launching-disney-restructuring

2022-11-21 16:02:38 - 3910180 - Nasdaq, S&P 500 finish lower on COVID restrictions in China; Disney helps Dow limit losses
https://seekingalpha.com/news/3910180-nasdaq-sp-500-slip-on-covid-restrictions-in-china-disney-gives-support-to-dow

2022-11-21 15:30:40 - 3910095 - Nasdaq, S&P, Dow lower amid fears of China tightening COVID curbs
https://seekingalpha.com/news/3910095-nasdaq-sp-dow-trade-lower-on-fears-of-zero-covid-stance-in-china

2022-11-21 10:25:11 - 3909955 - Nasdaq, S&P, Dow slip as China COVID curbs hit sentiment
https://seekingalpha.com/news/3909955-nasdaq-sp-500-dow-jones-stock-market
```