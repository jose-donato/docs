---
title: Introduction to ETFs
keywords: ['etfs', 'exchange traded funds', 'fund', 'basket', 'retail', 'stocks']
excerpt: "The Introduction to ETFs explains how to use the 
menu and provides a brief description of its sub-menus"

---

The ETF menu enables you to lookup any ETF
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ln/" target="_blank">ln</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ld/" target="_blank">ld</a>)
and obtain an
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/overview/" target="_blank">overview</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/holdings/" target="_blank">holdings</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/weights/" target="_blank">weights</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/news/" target="_blank">news</a>
about the chosen ETF. Furthermore, sub-menus reside in this menu that can be
used to
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/comparison_analysis/" target="_blank">compare
companies</a> within the ETF, discover gainers and losers within
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/disc/" target="_blank">discovery</a>
and apply advanced
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/ta/" target="_blank">technical
indicators</a> and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Forecasting
menu</a>. Lastly, it also has the option to export multiple ETFs to Excel with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/pir/" target="_blank">pir</a>.

## How to use

The ETF menu is called upon by typing `etf` which opens the following menu:

![ETF Menu](https://user-images.githubusercontent.com/46355364/174823477-48d3c21f-eb88-4942-b513-dbb4269cc9ee.png)

You have the ability to look up any ETF
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ln/" target="_blank">ln</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ld/" target="_blank">ld</a>).
With the example below, the `ld` command is used that searches the description
of the ETFs. Then the search query is entered with is `500`. Lastly, the `-l`
argument is included which refers to `limit` and is maxed to `15` ETFs.

```
2022 Jun 21, 09:14 (🦋) /etf/ $ ld 500 -l 15

                                                          ETFs by Total Assets
┏━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃      ┃ Name                                         ┃ Family                            ┃ Category                 ┃ Total Assets [M] ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ VOO  │ Vanguard S&P 500 ETF                         │ Vanguard                          │ Large Blend              │ 705316.98        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPY  │ SPDR S&P 500 ETF Trust                       │ SPDR State Street Global Advisors │ Large Blend              │ 363964.50        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVV  │ iShares Core S&P 500 ETF                     │ iShares                           │ Large Blend              │ 248764.65        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ ITOT │ iShares Core S&P Total U.S. Stock Market ETF │ iShares                           │ Large Blend              │ 38539.13         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVW  │ iShares S&P 500 Growth ETF                   │ iShares                           │ Large Growth             │ 30874.18         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ RSP  │ Invesco S&P 500 Equal Weight ETF             │ Invesco                           │ Large Blend              │ 26551.87         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHB │ Schwab U.S. Broad Market ETF                 │ Schwab ETFs                       │ Large Blend              │ 20675.03         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVE  │ iShares S&P 500 Value ETF                    │ iShares                           │ Large Value              │ 19373.45         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SDY  │ SPDR S&P Dividend ETF                        │ SPDR State Street Global Advisors │ Large Value              │ 17140.94         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHP │ Schwab U.S. TIPS ETF                         │ Schwab ETFs                       │ Inflation-Protected Bond │ 16553.40         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHA │ Schwab U.S. Small-Cap ETF                    │ Schwab ETFs                       │ Small Blend              │ 15301.01         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPYV │ SPDR Portfolio S&P 500 Value ETF             │ SPDR State Street Global Advisors │ Large Value              │ 11590.81         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPYG │ SPDR Portfolio S&P 500 Growth ETF            │ SPDR State Street Global Advisors │ Large Growth             │ 10514.91         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPLG │ SPDR Portfolio S&P 500 ETF                   │ SPDR State Street Global Advisors │ Large Blend              │ 9850.30          │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPLV │ Invesco S&P 500 Low Volatility ETF           │ Invesco                           │ Large Blend              │ 7922.23          │
└──────┴──────────────────────────────────────────────┴───────────────────────────────────┴──────────────────────────┴──────────────────┘
```

This results in a selection of
<a href="https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp" target="_blank">tickers</a>,
name, family, category and total assets (estimation). With this information, you
can load in one of the tickers into the menu. This can be done with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/load" target="_blank">load</a>.
See the following example:

```
2022 Jun 21, 09:22 (🦋) /etf/ $ load VOO
Top company holdings found: AAPL, MSFT, AMZN, GOOGL, TSLA
```

To then view the stock chart, you can call
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/candle/" target="_blank">candle</a>
which shows a candle chart for the defined period (by default set to a year by
`load`):

![Candle Chart of VOO](https://user-images.githubusercontent.com/46355364/174823545-6695f9b0-864c-4b94-a612-baa8087d1858.png)

By calling `?` or `help` the ETF menu re-appears. Here you can see that multiple
commands menus have turned blue. Because of loading a ticker, these menus can
now be used in combination with the chosen ticker.

![ETF Menu with ETF Loaded](https://user-images.githubusercontent.com/46355364/174823623-42f0c54c-93a0-484e-a0b8-b82302977b29.png)

For example, the ETF's weights can now be depicted with the following:

```
2022 Jun 21, 09:45 (🦋) /etf/ $ weights
```

Which shows the following graph:

![Weights of VOO](https://user-images.githubusercontent.com/46355364/174823708-bdf1221f-c183-435a-b436-f0319123f13d.png)

## Sub-menus available

The ETF menu has a few sub-menus available to delve further into a specific ETF
or screen multiple ETFs at the same time. To find more information about each
menu, click on one of the following:

- <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/comparison_analysis/" target="_blank">Introduction
  to Comparison Analysis</a>: have the ability to compare companies within the
  ETF based on, among other things, correlation, financial statements,
  sentiment, valuations and performance.
- <a href="disc" target="_blank">Introduction to ETF Discovery</a>: discover
  trending ETF based on their returns (gainers and decliners) as well as
  activity.
- <a href="scr" target="_blank">Introduction to ETF Screener</a>: provides the
  ability to screen companies within the ETF based on a preset as well as the
  ability to screen by category.
- <a href="/OpenBBTerminal/terminal/common/ta" target="_blank">Introduction to
  Technical Analysis</a>: analysis the chosen ETF's historical data extensively
  with moving averages and momentum, trend, volatility and volume indicators.
- <a href="/OpenBBTerminal/terminal/forecast/" target="_blank">Introduction to
  Forecasting menu</a>: apply advanced AI and Machine Learning models to form
  prediction of future ETF prices including Recurrent Neural Network (RNN),
  Autoregressive Integrated Moving Average (ARIMA) and Monte Carlo forecasting.

## Examples

If we want to learn more about a total market ETF, we can do the following,
starting from the `etf` menu and using the `ld` command where we specify with
`-l` we wish to see `15` ETFs max.

```
2022 Jun 21, 10:08 (🦋) /etf/ $ ld total market -l 15

                                                              ETFs by Total Assets
┏━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃      ┃ Name                                               ┃ Family                            ┃ Category                  ┃ Total Assets [M] ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ VTI  │ Vanguard Total Stock Market Index Fund ETF Shares  │ Vanguard                          │ Large Blend               │ 1169855.61       │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ ITOT │ iShares Core S&P Total U.S. Stock Market ETF       │ iShares                           │ Large Blend               │ 38539.13         │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XBI  │ SPDR S&P Biotech ETF                               │ SPDR State Street Global Advisors │ Health                    │ 7845.92          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ HYLB │ Xtrackers USD High Yield Corporate Bond ETF        │ Xtrackers                         │ High Yield Bond           │ 6760.46          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ KRE  │ SPDR S&P Regional Banking ETF                      │ SPDR State Street Global Advisors │ Financial                 │ 5101.42          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XOP  │ SPDR S&P Oil & Gas Exploration & Production ETF    │ SPDR State Street Global Advisors │ Equity Energy             │ 3828.98          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XHB  │ SPDR S&P Homebuilders ETF                          │ SPDR State Street Global Advisors │ Consumer Cyclical         │ 2095.61          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XME  │ SPDR S&P Metals and Mining ETF                     │ SPDR State Street Global Advisors │ Natural Resources         │ 1876.30          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ SCHK │ Schwab 1000 ETF                                    │ Schwab ETFs                       │ Large Blend               │ 1782.93          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XAR  │ SPDR S&P Aerospace & Defense ETF                   │ SPDR State Street Global Advisors │ Industrials               │ 1364.05          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ FPXI │ First Trust International Equity Opportunities ETF │ First Trust                       │ Foreign Large Growth      │ 1124.12          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XSD  │ SPDR S&P Semiconductor ETF                         │ SPDR State Street Global Advisors │ Technology                │ 976.82           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XHE  │ SPDR S&P Health Care Equipment ETF                 │ SPDR State Street Global Advisors │ Health                    │ 802.28           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XRT  │ SPDR S&P Retail ETF                                │ SPDR State Street Global Advisors │ Consumer Cyclical         │ 781.05           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ UWM  │ ProShares Ultra Russell2000                        │ ProShares                         │ Trading--Leveraged Equity │ 746.08           │
└──────┴────────────────────────────────────────────────────┴───────────────────────────────────┴───────────────────────────┴──────────────────┘
```

It seems Vanguard Total Stock Market Index Fund ETF Shares (VTI) is by far the
largest ETF in this list so let's
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/load" target="_blank">load</a>
it in. Also, a larger period is chosen by using `-s` as shown in the
documentation:

```
2022 Jun 21, 10:08 (🦋) /etf/ $ load VTI -s 2010-01-01
Top company holdings found: AAPL, MSFT, AMZN, GOOGL, TSLA
```

We can now plot the corresponding ETF chart with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/candle/" target="_blank">candle</a>
which shows the company's historical data from `2010-01-01` until the current
date. We are also adding in trendlines with `-t`.

```
2022 Jun 21, 10:13 (🦋) /etf/ $ candle -t
```

![Candle Chart with Trendlines](https://user-images.githubusercontent.com/46355364/174823785-ec11cb1a-dbf0-45a7-b086-31542ece39a3.png)

Now we can go ahead and explore more about the ETF by running
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/holdings/" target="_blank">holdings</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/weights/" target="_blank">weights</a>
using the `--raw` argument for weights to display a table instead of a graph.

```
2022 Jun 21, 10:16 (🦋) /etf/ $ holdings

           ETF Holdings
┏━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━┓
┃       ┃ % Of Etf ┃ Shares      ┃
┡━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━┩
│ AAPL  │ 5.58%    │ 454,234,952 │
├───────┼──────────┼─────────────┤
│ MSFT  │ 4.93%    │ 219,650,708 │
├───────┼──────────┼─────────────┤
│ AMZN  │ 2.51%    │ 12,672,230  │
├───────┼──────────┼─────────────┤
│ GOOGL │ 1.67%    │ 8,869,298   │
├───────┼──────────┼─────────────┤
│ TSLA  │ 1.52%    │ 24,224,503  │
├───────┼──────────┼─────────────┤
│ GOOG  │ 1.47%    │ 7,802,130   │
├───────┼──────────┼─────────────┤
│ BRK.B │ 1.30%    │ 49,671,912  │
├───────┼──────────┼─────────────┤
│ JNJ   │ 1.14%    │ 77,035,899  │
├───────┼──────────┼─────────────┤
│ UNH   │ 1.13%    │ 27,566,141  │
├───────┼──────────┼─────────────┤
│ META  │ 1.08%    │ 67,655,143  │
└───────┴──────────┴─────────────┘

2022 Jun 21, 10:16 (🦋) /etf/ $ weights --raw

Sector holdings of VTI

              Sector Weightings Allocation
┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                        ┃ % of holdings in the sector ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Technology             │ 23.55                       │
├────────────────────────┼─────────────────────────────┤
│ Healthcare             │ 13.97                       │
├────────────────────────┼─────────────────────────────┤
│ Financial Services     │ 13.42                       │
├────────────────────────┼─────────────────────────────┤
│ Consumer Cyclical      │ 10.61                       │
├────────────────────────┼─────────────────────────────┤
│ Industrials            │ 9.00                        │
├────────────────────────┼─────────────────────────────┤
│ Communication Services │ 7.98                        │
├────────────────────────┼─────────────────────────────┤
│ Consumer Defensive     │ 6.35                        │
├────────────────────────┼─────────────────────────────┤
│ Energy                 │ 4.81                        │
├────────────────────────┼─────────────────────────────┤
│ Real Estate            │ 3.78                        │
├────────────────────────┼─────────────────────────────┤
│ Basic Materials        │ 2.69                        │
├────────────────────────┼─────────────────────────────┤
│ Utilities              │ 2.29                        │
└────────────────────────┴─────────────────────────────┘
```

---

title: Introduction to ETFs keywords: ['etfs', 'exchange traded funds', 'fund',
'basket', 'retail', 'stocks'] excerpt: "The Introduction to ETFs explains how to
use the menu and provides a brief description of its sub-menus"

---

The ETF menu enables you to lookup any ETF
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ln/" target="_blank">ln</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ld/" target="_blank">ld</a>)
and obtain an
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/overview/" target="_blank">overview</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/holdings/" target="_blank">holdings</a>,
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/weights/" target="_blank">weights</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/news/" target="_blank">news</a>
about the chosen ETF. Furthermore, sub-menus reside in this menu that can be
used to
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/comparison_analysis/" target="_blank">compare
companies</a> within the ETF, discover gainers and losers within
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/disc/" target="_blank">discovery</a>
and apply advanced
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/common/ta/" target="_blank">technical
indicators</a> and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/forecast/" target="_blank">Forecasting
menu</a>. Lastly, it also has the option to export multiple ETFs to Excel with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/pir/" target="_blank">pir</a>.

## How to use

The ETF menu is called upon by typing `etf` which opens the following menu:

![ETF Menu](https://user-images.githubusercontent.com/46355364/174823477-48d3c21f-eb88-4942-b513-dbb4269cc9ee.png)

You have the ability to look up any ETF
(<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ln/" target="_blank">ln</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/ld/" target="_blank">ld</a>).
With the example below, the `ld` command is used that searches the description
of the ETFs. Then the search query is entered with is `500`. Lastly, the `-l`
argument is included which refers to `limit` and is maxed to `15` ETFs.

```
2022 Jun 21, 09:14 (🦋) /etf/ $ ld 500 -l 15

                                                          ETFs by Total Assets
┏━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃      ┃ Name                                         ┃ Family                            ┃ Category                 ┃ Total Assets [M] ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ VOO  │ Vanguard S&P 500 ETF                         │ Vanguard                          │ Large Blend              │ 705316.98        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPY  │ SPDR S&P 500 ETF Trust                       │ SPDR State Street Global Advisors │ Large Blend              │ 363964.50        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVV  │ iShares Core S&P 500 ETF                     │ iShares                           │ Large Blend              │ 248764.65        │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ ITOT │ iShares Core S&P Total U.S. Stock Market ETF │ iShares                           │ Large Blend              │ 38539.13         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVW  │ iShares S&P 500 Growth ETF                   │ iShares                           │ Large Growth             │ 30874.18         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ RSP  │ Invesco S&P 500 Equal Weight ETF             │ Invesco                           │ Large Blend              │ 26551.87         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHB │ Schwab U.S. Broad Market ETF                 │ Schwab ETFs                       │ Large Blend              │ 20675.03         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ IVE  │ iShares S&P 500 Value ETF                    │ iShares                           │ Large Value              │ 19373.45         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SDY  │ SPDR S&P Dividend ETF                        │ SPDR State Street Global Advisors │ Large Value              │ 17140.94         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHP │ Schwab U.S. TIPS ETF                         │ Schwab ETFs                       │ Inflation-Protected Bond │ 16553.40         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SCHA │ Schwab U.S. Small-Cap ETF                    │ Schwab ETFs                       │ Small Blend              │ 15301.01         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPYV │ SPDR Portfolio S&P 500 Value ETF             │ SPDR State Street Global Advisors │ Large Value              │ 11590.81         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPYG │ SPDR Portfolio S&P 500 Growth ETF            │ SPDR State Street Global Advisors │ Large Growth             │ 10514.91         │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPLG │ SPDR Portfolio S&P 500 ETF                   │ SPDR State Street Global Advisors │ Large Blend              │ 9850.30          │
├──────┼──────────────────────────────────────────────┼───────────────────────────────────┼──────────────────────────┼──────────────────┤
│ SPLV │ Invesco S&P 500 Low Volatility ETF           │ Invesco                           │ Large Blend              │ 7922.23          │
└──────┴──────────────────────────────────────────────┴───────────────────────────────────┴──────────────────────────┴──────────────────┘
```

This results in a selection of
<a href="https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp" target="_blank">tickers</a>,
name, family, category and total assets (estimation). With this information, you
can load in one of the tickers into the menu. This can be done with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/load" target="_blank">load</a>.
See the following example:

```
2022 Jun 21, 09:22 (🦋) /etf/ $ load VOO
Top company holdings found: AAPL, MSFT, AMZN, GOOGL, TSLA
```

To then view the stock chart, you can call
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/candle/" target="_blank">candle</a>
which shows a candle chart for the defined period (by default set to a year by
`load`):

![Candle Chart of VOO](https://user-images.githubusercontent.com/46355364/174823545-6695f9b0-864c-4b94-a612-baa8087d1858.png)

By calling `?` or `help` the ETF menu re-appears. Here you can see that multiple
commands menus have turned blue. Because of loading a ticker, these menus can
now be used in combination with the chosen ticker.

![ETF Menu with ETF Loaded](https://user-images.githubusercontent.com/46355364/174823623-42f0c54c-93a0-484e-a0b8-b82302977b29.png)

For example, the ETF's weights can now be depicted with the following:

```
2022 Jun 21, 09:45 (🦋) /etf/ $ weights
```

Which shows the following graph:

![Weights of VOO](https://user-images.githubusercontent.com/46355364/174823708-bdf1221f-c183-435a-b436-f0319123f13d.png)

## Sub-menus available

The ETF menu has a few sub-menus available to delve further into a specific ETF
or screen multiple ETFs at the same time. To find more information about each
menu, click on one of the following:

- <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/comparison_analysis/" target="_blank">Introduction
  to Comparison Analysis</a>: have the ability to compare companies within the
  ETF based on, among other things, correlation, financial statements,
  sentiment, valuations and performance.
- <a href="disc" target="_blank">Introduction to ETF Discovery</a>: discover
  trending ETF based on their returns (gainers and decliners) as well as
  activity.
- <a href="scr" target="_blank">Introduction to ETF Screener</a>: provides the
  ability to screen companies within the ETF based on a preset as well as the
  ability to screen by category.
- <a href="/OpenBBTerminal/terminal/common/ta" target="_blank">Introduction to
  Technical Analysis</a>: analysis the chosen ETF's historical data extensively
  with moving averages and momentum, trend, volatility and volume indicators.
- <a href="/OpenBBTerminal/terminal/forecast/" target="_blank">Introduction to
  Forecasting menu</a>: apply advanced AI and Machine Learning models to form
  prediction of future ETF prices including Recurrent Neural Network (RNN),
  Autoregressive Integrated Moving Average (ARIMA) and Monte Carlo forecasting.

## Examples

If we want to learn more about a total market ETF, we can do the following,
starting from the `etf` menu and using the `ld` command where we specify with
`-l` we wish to see `15` ETFs max.

```
2022 Jun 21, 10:08 (🦋) /etf/ $ ld total market -l 15

                                                              ETFs by Total Assets
┏━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃      ┃ Name                                               ┃ Family                            ┃ Category                  ┃ Total Assets [M] ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ VTI  │ Vanguard Total Stock Market Index Fund ETF Shares  │ Vanguard                          │ Large Blend               │ 1169855.61       │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ ITOT │ iShares Core S&P Total U.S. Stock Market ETF       │ iShares                           │ Large Blend               │ 38539.13         │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XBI  │ SPDR S&P Biotech ETF                               │ SPDR State Street Global Advisors │ Health                    │ 7845.92          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ HYLB │ Xtrackers USD High Yield Corporate Bond ETF        │ Xtrackers                         │ High Yield Bond           │ 6760.46          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ KRE  │ SPDR S&P Regional Banking ETF                      │ SPDR State Street Global Advisors │ Financial                 │ 5101.42          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XOP  │ SPDR S&P Oil & Gas Exploration & Production ETF    │ SPDR State Street Global Advisors │ Equity Energy             │ 3828.98          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XHB  │ SPDR S&P Homebuilders ETF                          │ SPDR State Street Global Advisors │ Consumer Cyclical         │ 2095.61          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XME  │ SPDR S&P Metals and Mining ETF                     │ SPDR State Street Global Advisors │ Natural Resources         │ 1876.30          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ SCHK │ Schwab 1000 ETF                                    │ Schwab ETFs                       │ Large Blend               │ 1782.93          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XAR  │ SPDR S&P Aerospace & Defense ETF                   │ SPDR State Street Global Advisors │ Industrials               │ 1364.05          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ FPXI │ First Trust International Equity Opportunities ETF │ First Trust                       │ Foreign Large Growth      │ 1124.12          │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XSD  │ SPDR S&P Semiconductor ETF                         │ SPDR State Street Global Advisors │ Technology                │ 976.82           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XHE  │ SPDR S&P Health Care Equipment ETF                 │ SPDR State Street Global Advisors │ Health                    │ 802.28           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ XRT  │ SPDR S&P Retail ETF                                │ SPDR State Street Global Advisors │ Consumer Cyclical         │ 781.05           │
├──────┼────────────────────────────────────────────────────┼───────────────────────────────────┼───────────────────────────┼──────────────────┤
│ UWM  │ ProShares Ultra Russell2000                        │ ProShares                         │ Trading--Leveraged Equity │ 746.08           │
└──────┴────────────────────────────────────────────────────┴───────────────────────────────────┴───────────────────────────┴──────────────────┘
```

It seems Vanguard Total Stock Market Index Fund ETF Shares (VTI) is by far the
largest ETF in this list so let's
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/load" target="_blank">load</a>
it in. Also, a larger period is chosen by using `-s` as shown in the
documentation:

```
2022 Jun 21, 10:08 (🦋) /etf/ $ load VTI -s 2010-01-01
Top company holdings found: AAPL, MSFT, AMZN, GOOGL, TSLA
```

We can now plot the corresponding ETF chart with
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/candle/" target="_blank">candle</a>
which shows the company's historical data from `2010-01-01` until the current
date. We are also adding in trendlines with `-t`.

```
2022 Jun 21, 10:13 (🦋) /etf/ $ candle -t
```

![Candle Chart with Trendlines](https://user-images.githubusercontent.com/46355364/174823785-ec11cb1a-dbf0-45a7-b086-31542ece39a3.png)

Now we can go ahead and explore more about the ETF by running
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/holdings/" target="_blank">holdings</a>
and
<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/etf/weights/" target="_blank">weights</a>
using the `--raw` argument for weights to display a table instead of a graph.

```
2022 Jun 21, 10:16 (🦋) /etf/ $ holdings

           ETF Holdings
┏━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━┓
┃       ┃ % Of Etf ┃ Shares      ┃
┡━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━┩
│ AAPL  │ 5.58%    │ 454,234,952 │
├───────┼──────────┼─────────────┤
│ MSFT  │ 4.93%    │ 219,650,708 │
├───────┼──────────┼─────────────┤
│ AMZN  │ 2.51%    │ 12,672,230  │
├───────┼──────────┼─────────────┤
│ GOOGL │ 1.67%    │ 8,869,298   │
├───────┼──────────┼─────────────┤
│ TSLA  │ 1.52%    │ 24,224,503  │
├───────┼──────────┼─────────────┤
│ GOOG  │ 1.47%    │ 7,802,130   │
├───────┼──────────┼─────────────┤
│ BRK.B │ 1.30%    │ 49,671,912  │
├───────┼──────────┼─────────────┤
│ JNJ   │ 1.14%    │ 77,035,899  │
├───────┼──────────┼─────────────┤
│ UNH   │ 1.13%    │ 27,566,141  │
├───────┼──────────┼─────────────┤
│ META  │ 1.08%    │ 67,655,143  │
└───────┴──────────┴─────────────┘

2022 Jun 21, 10:16 (🦋) /etf/ $ weights --raw

Sector holdings of VTI

              Sector Weightings Allocation
┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                        ┃ % of holdings in the sector ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Technology             │ 23.55                       │
├────────────────────────┼─────────────────────────────┤
│ Healthcare             │ 13.97                       │
├────────────────────────┼─────────────────────────────┤
│ Financial Services     │ 13.42                       │
├────────────────────────┼─────────────────────────────┤
│ Consumer Cyclical      │ 10.61                       │
├────────────────────────┼─────────────────────────────┤
│ Industrials            │ 9.00                        │
├────────────────────────┼─────────────────────────────┤
│ Communication Services │ 7.98                        │
├────────────────────────┼─────────────────────────────┤
│ Consumer Defensive     │ 6.35                        │
├────────────────────────┼─────────────────────────────┤
│ Energy                 │ 4.81                        │
├────────────────────────┼─────────────────────────────┤
│ Real Estate            │ 3.78                        │
├────────────────────────┼─────────────────────────────┤
│ Basic Materials        │ 2.69                        │
├────────────────────────┼─────────────────────────────┤
│ Utilities              │ 2.29                        │
└────────────────────────┴─────────────────────────────┘
```
