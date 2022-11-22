---
title: Options
keywords: ["Options", "stocks", "derivatives", "puts", "calls", "oi", "vol", "greeks", "voi", "volatility", "vsurf", "chains", "parity", "binom", "screen", "pricing", "hedge", "pcr", "info", "hist", "grhist", "plot", "parity"]
excerpt: "This guide introduces the user to Options submenu, within the Stocks menu."
---
The Options menu provides the user with a comprehensive set of tools for analyzing equity options. This guide provides an overview of the menu and demonstrates commands in context. Using this menu correctly will require understanding terminology and math specific to the asset class. Wikipedia is a great resource for definitions and for learning about the mechanics of derivatives, read it <a href="https://en.wikipedia.org/wiki/Option_(finance)" target="_blank">here</a>. These are complex, leveraged, financial instruments requiring specialized knoweledge and a different frame-of-mind than the approach of an equities long-only investor. Always conduct thorough due diligence.<br />

### How to use

Navigate to the menu by typing `options`, from the `Stocks` menu, and then pressing enter. Alternatively, absolute path navigation can jump straight there, from anywhere. `/stocks/options`

![The Options Menu](https://user-images.githubusercontent.com/85772166/172717122-a857dd69-6e79-4773-996a-74ea71f8ee86.png)

By default, the Terminal loads a ticker using <a href="https://developer.tradier.com/" target="_blank">Tradier</a> as the source. Sign up for a free developer account and then enter that token using the <a href="/terminal/quickstart/keys" target="_blank">`Keys menu`</a>. Alternatively, there is a choice to use yFinance data sets by attaching the argument as shown below. Help dialogues are displayed for any command by adding `-h` to the string. It is worth noting that this load command is different than the load command elsewhere.

````
(🦋) /stocks/options/ $ load -h
usage: load [-t TICKER] [--source {tradier,yf}] [-h]

Load a ticker into option menu

optional arguments:
  -t TICKER, --ticker TICKER
                        Stock ticker (default: None)
  --source  {tradier ,yf}    Tradier or Yahoo Finance (default: tr)
                        Source to get option expirations from (default: None)
  -h, --help            show this help message (default: False)
````

### Submenus Available

At the bottom of the menu, and near the top, there are items prefaced with `>`. Like everywhere else in the OpenBB Terminal, this indicates the presence of a submenu.

  - `screen` is a dedicated options screener that uses `.ini` files from the local installation folder `/OpenBBUserData/stocks/presets/options/`. Refer to the Options Screener guide <a href="/terminal/stocks/options/screener" target="_blank">here</a>.
  - `pricing` is another method for calculating options prices. See the guide for this submenu <a href="/terminal/stocks/options/pricing" target="_blank">here</a>.
  - `hedge` is a group of features for calculating a delta-neutral position. The guide for this submenu is located <a href="/terminal/stocks/options/hedge" target="_blank">here</a>.

### Examples

To begin, a ticker must be loaded with an expiration date selected. Enter these commands to display the list of expiration dates for AAPL options chains.
````
(🦋) /stocks/options/ $ load aapl

(🦋) /stocks/options/ $ exp

   Available expiry dates
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Identifier ┃ Date       ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 0          │ 2022-05-20 │
├────────────┼────────────┤
│ 1          │ 2022-05-27 │
├────────────┼────────────┤
│ 2          │ 2022-06-03 │
├────────────┼────────────┤
│ 3          │ 2022-06-10 │
├────────────┼────────────┤
│ 4          │ 2022-06-17 │
├────────────┼────────────┤
│ 5          │ 2022-06-24 │
├────────────┼────────────┤
│ 6          │ 2022-07-01 │
├────────────┼────────────┤
│ 7          │ 2022-07-15 │
├────────────┼────────────┤
│ 8          │ 2022-08-19 │
├────────────┼────────────┤
│ 9          │ 2022-09-16 │
├────────────┼────────────┤
│ 10         │ 2022-10-21 │
├────────────┼────────────┤
│ 11         │ 2022-11-18 │
├────────────┼────────────┤
│ 12         │ 2022-12-16 │
├────────────┼────────────┤
│ 13         │ 2023-01-20 │
├────────────┼────────────┤
│ 14         │ 2023-03-17 │
├────────────┼────────────┤
│ 15         │ 2023-06-16 │
├────────────┼────────────┤
│ 16         │ 2023-09-15 │
├────────────┼────────────┤
│ 17         │ 2024-01-19 │
├────────────┼────────────┤
│ 18         │ 2024-06-21 │
└────────────┴────────────┘
````

Choose an expiration date with the corresponding Identifier value on the left, for example setting the expiration date to `2023-09-15` is done with the following:

````
(🦋) /stocks/options/ $ exp 16
Expiration set to 2023-09-15
````

Setting the chain for analysis will change the text colour at the bottom of the Options menu. These commands require loaded data.

![The Options menu with a loaded ticker and expiration date](https://user-images.githubusercontent.com/85772166/172724623-dbb16566-5dfa-482c-a67e-948e01444ca8.png)

The `info` command displays a table of statistics regarding the chosen option expiration date.
````
(🦋) /stocks/options/ $ info

                Options Information
┏━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Info                  ┃ Value                   ┃
┡━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Implied Volatility    │   38.07%  (  -1.48%)    │
├───────────────────────┼─────────────────────────┤
│ Historical Volatility │   42.90%                │
├───────────────────────┼─────────────────────────┤
│ IV Percentile         │   95%                   │
├───────────────────────┼─────────────────────────┤
│ IV Rank               │   78.41%                │
├───────────────────────┼─────────────────────────┤
│ IV High               │   43.37% on 04/26/22    │
├───────────────────────┼─────────────────────────┤
│ IV Low                │   18.80% on 06/11/21    │
├───────────────────────┼─────────────────────────┤
│ Put/Call Vol Ratio    │  0.81                   │
├───────────────────────┼─────────────────────────┤
│ Today's Volume        │  2,045,793              │
├───────────────────────┼─────────────────────────┤
│ Volume Avg (30-Day)   │  1,293,501              │
├───────────────────────┼─────────────────────────┤
│ Put/Call OI Ratio     │  0.88                   │
├───────────────────────┼─────────────────────────┤
│ Today's Open Interest │  8,226,541              │
├───────────────────────┼─────────────────────────┤
│ Open Int (30-Day)     │  7,576,733              │
└───────────────────────┴─────────────────────────┘
````
An adjustable-period put/call ratio chart is called according to the timeline selected by the user.

````
(🦋) /stocks/options/ $ pcr 180
````
![180 day window for put/call ratio](https://user-images.githubusercontent.com/85772166/172721035-2c1b3191-430a-4bb4-86be-f932abb87215.png)

The chain's open interest and current volume can be visualized with the `voi` command:

````
(🦋) /stocks/options/ $ voi
````

![Volume & Open Interest](https://user-images.githubusercontent.com/85772166/172721788-cc801a19-9625-4180-b948-46d4a51da343.png)

The `chains` command will display pricing, volume, open interest, and greeks data as a snapshot. Here, a maximum strike price of 175 is selected.

```
(🦋) /stocks/options/ $ chains -M 175

                                                                   Yahoo Option Chain (15 min delayed) for 2024-06-21 (Greeks calculated by OpenBB)
┏━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┓
┃ Strike ┃ Price     ┃ Bid Call ┃ Ask Call ┃ Volume    ┃ Interest  ┃ Volatil… ┃ Delta     ┃ Gamma    ┃ Theta     ┃ Price    ┃ Bid Put ┃ Ask Put ┃ Volume    ┃ Interest ┃ Volatili… ┃ Delta    ┃ Gamma Put ┃ Theta    ┃
┃        ┃ Call      ┃          ┃          ┃ Call      ┃ Call      ┃ Call     ┃ Call      ┃ Call     ┃ Call      ┃ Put      ┃         ┃         ┃ Put       ┃ Put      ┃ Put       ┃ Put      ┃           ┃ Put      ┃
┡━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━┩
│ 115.00 │ 49.35     │ 50.05    │ 50.95    │ 1         │ 1022      │ 0.47009… │ 1.0       │ 1.61407… │ -0.00945… │ 8.43     │ 7.9     │ 8.7     │ 3.0       │ 3235.0   │ 0.331976… │ 0.0      │ 2.2e-322  │ -7.5e-3… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 120.00 │ 47.1      │ 46.6     │ 47.55    │ 1         │ 1435      │ 0.45880… │ 1.0       │ 1.93929… │ -0.00986… │ 9.67     │ 9.15    │ 9.85    │ 3.0       │ 5514.0   │ 0.320929… │ 0.0      │ 1.423479… │ -4.4927… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 125.00 │ 44.75     │ 43.3     │ 44.3     │ 1         │ 806       │ 0.44867… │ 1.0       │ 2.75836… │ -0.01027… │ 11.2     │ 10.7    │ 11.25   │ 1.0       │ 2029.0   │ 0.312323… │ 0.0      │ 2.467386… │ -7.3753… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 130.00 │ 39.65     │ 40.15    │ 41.05    │ 1         │ 4410      │ 0.43720… │ 1.0       │ 5.12764… │ -0.01068… │ 12.9     │ 12.15   │ 12.8    │ 4.0       │ 5554.0   │ 0.304023… │ 0.0      │ 3.558185… │ -1.0077… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 135.00 │ 36.45     │ 37.15    │ 37.95    │ 6         │ 5523      │ 0.42670… │ 1.0       │ 7.62752… │ -0.01109… │ 14.65    │ 13.95   │ 14.45   │ 1.0       │ 3335.0   │ 0.295173… │ 0.0      │ 6.454222… │ -1.7229… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 140.00 │ 33.75     │ 34.25    │ 35.0     │ 2         │ 3779      │ 0.41705… │ 0.999999… │ 3.84130… │ -0.01150… │ 15.9     │ 15.65   │ 16.3    │ 33.0      │ 7545.0   │ 0.287085… │ 0.0      │ 2.688352… │ -6.7879… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 145.00 │ 31.0      │ 31.45    │ 32.35    │ 12        │ 2869      │ 0.41022… │ 0.999885… │ 0.00035… │ -0.01375… │ 18.05    │ 17.7    │ 18.35   │ 26.0      │ 4960.0   │ 0.279639… │ -3.3249… │ 2.152284… │ -5.1540… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 150.00 │ 29.2      │ 28.9     │ 29.7     │ 22        │ 15214     │ 0.40189… │ 0.367976… │ 0.30451… │ -1.51185… │ 20.52    │ 19.95   │ 20.6    │ 4.0       │ 4687.0   │ 0.272620… │ -0.6916… │ 0.419246… │ -0.9464… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 155.00 │ 26.03     │ 26.45    │ 27.15    │ 1         │ 2860      │ 0.39346… │ 5.613864… │ 2.13140… │ -0.00010… │ 23.45    │ 22.15   │ 22.95   │ 3.0       │ 1934.0   │ 0.264625… │ -0.9999… │ 2.627570… │ 0.01273… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 160.00 │ 24.0      │ 24.2     │ 24.75    │ 65        │ 5716      │ 0.38562… │ 1.123975… │ 8.13455… │ -3.70871… │ 25.3     │ 24.75   │ 25.4    │ 27.0      │ 5716.0   │ 0.255592… │ -1.0     │ 1.377216… │ 0.01315… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 165.00 │ 21.67     │ 21.9     │ 22.6     │ 61        │ 3091      │ 0.37961… │ 1.947764… │ 2.10427… │ -9.29595… │ 28.85    │ 27.45   │ 28.0    │ 9.0       │ 2460.0   │ 0.246040… │ -1.0     │ 1.795921… │ 0.01356… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 170.00 │ 19.7      │ 20.0     │ 20.7     │ 67        │ 6149      │ 0.37543… │ 7.562013… │ 1.08657… │ -4.69467… │ 30.75    │ 30.4    │ 31.0    │ 69.0      │ 2698.0   │ 0.239265… │ -1.0     │ 1.560715… │ 0.01397… │
├────────┼───────────┼──────────┼──────────┼───────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┼─────────┼─────────┼───────────┼──────────┼───────────┼──────────┼───────────┼──────────┤
│ 175.00 │ 19.0      │ 17.85    │ 18.6     │ 21        │ 7927      │ 0.36707… │ 4.383630… │ 8.07112… │ -3.33350… │ 33.85    │ 33.45   │ 34.15   │ 42.0      │ 2940.0   │ 0.231849… │ -1.0     │ 9.418782… │ 0.01438… │
└────────┴───────────┴──────────┴──────────┴───────────┴───────────┴──────────┴───────────┴──────────┴───────────┴──────────┴─────────┴─────────┴───────────┴──────────┴───────────┴──────────┴───────────┴──────────┘
```

Additional Greeks are accessible through the command, `greeks`. Here the minimum and maximum strike price is defined.

````
(🦋) /stocks/options/ $ greeks -m 135 -M 160

                               Greeks
┏━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┓
┃ Strike ┃ Implied Vol ┃ Delta    ┃ Gamma    ┃ Vega     ┃ Theta     ┃
┡━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━┩
│ 135.0  │ 0.4286      │ 1.000000 │ 0.000000 │ 0.000000 │ -0.010815 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┤
│ 140.0  │ 0.4211      │ 1.000000 │ 0.000000 │ 0.000000 │ -0.011215 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┤
│ 145.0  │ 0.4100      │ 0.999900 │ 0.000315 │ 0.000012 │ -0.013239 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┤
│ 150.0  │ 0.4016      │ 0.373409 │ 0.307522 │ 0.011610 │ -1.525272 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┤
│ 155.0  │ 0.3953      │ 0.000006 │ 0.000023 │ 0.000001 │ -0.000110 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┤
│ 160.0  │ 0.3847      │ 0.000000 │ 0.000000 │ 0.000000 │ -0.000000 │
└────────┴─────────────┴──────────┴──────────┴──────────┴───────────┘
````

See the effects of monetary policy by adjusting for the risk-free rate of return, and factor in dividend payments.

````
(🦋) /stocks/options/ $ greeks -d 0.67 -r 1 -m 140 -M 170 -a

                                                             Greeks
┏━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━┓
┃ Strike ┃ Implied Vol ┃ Delta    ┃ Gamma    ┃ Vega     ┃ Theta     ┃ Rho      ┃ Phi       ┃ Charm     ┃ Vanna     ┃ Vomma     ┃
┡━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━┩
│ 140.0  │ 0.4214      │ 0.999720 │ 0.000000 │ 0.000000 │ -0.108943 │ 0.000585 │ -0.000625 │ 0.001835  │ -0.000000 │ -0.000000 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 145.0  │ 0.4096      │ 0.999620 │ 0.000317 │ 0.000012 │ -0.124250 │ 0.000606 │ -0.000625 │ 0.006614  │ -0.000036 │ -0.000036 │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 150.0  │ 0.4019      │ 0.368105 │ 0.306648 │ 0.011523 │ -1.566906 │ 0.000229 │ -0.000230 │ -0.466694 │ 0.003233  │ 0.003233  │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 155.0  │ 0.3955      │ 0.000005 │ 0.000021 │ 0.000001 │ -0.000101 │ 0.000000 │ -0.000000 │ -0.000368 │ 0.000003  │ 0.000003  │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 160.0  │ 0.3850      │ 0.000000 │ 0.000000 │ 0.000000 │ -0.000000 │ 0.000000 │ -0.000000 │ -0.000000 │ 0.000000  │ 0.000000  │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 165.0  │ 0.3796      │ 0.000000 │ 0.000000 │ 0.000000 │ -0.000000 │ 0.000000 │ -0.000000 │ -0.000000 │ 0.000000  │ 0.000000  │
├────────┼─────────────┼──────────┼──────────┼──────────┼───────────┼──────────┼───────────┼───────────┼───────────┼───────────┤
│ 170.0  │ 0.3708      │ 0.000000 │ 0.000000 │ 0.000000 │ -0.000000 │ 0.000000 │ -0.000000 │ -0.000000 │ 0.000000  │ 0.000000  │
└────────┴─────────────┴──────────┴──────────┴──────────┴───────────┴──────────┴───────────┴───────────┴───────────┴───────────┘
````

The `binom` command will calculate options values using <a href="https://en.wikipedia.org/wiki/Binomial_options_pricing_model" target="_blank">binomial pricing models</a>. Display a probabilities distribution chart using the optional argument `--plot`

````
(🦋) /stocks/options/ $ binom --plot
````

![Probabilities distribution using binomial pricing, for AAPL options expiring Sep/23](https://user-images.githubusercontent.com/85772166/172722694-9a4b782e-9ec5-4b47-a31a-e5b9dd04eeba.png)

Visualize the volume of puts and calls in a chain with `vol`
````
(🦋) /stocks/options/ $ vol -m 0 -M 250
````
![Puts and calls volume for AAPL 09/23 expiration](https://user-images.githubusercontent.com/85772166/172722818-1cdf1d8c-2a8a-4ede-a455-041b3066dcb3.png)

Plot the open interest in a similar fashion with `oi`
````
(🦋) /stocks/options/ $ oi
````
![Open interest for AAPL expiring 2023-09-15](https://user-images.githubusercontent.com/85772166/172722959-edab3c32-a3f3-47db-80be-a33e382ddd9a.png)

Historical OHLC pricing for individual contracts can be viewed with `hist`
````
(🦋) /stocks/options/ $ hist -p -s 70
````
![Price history for AAPL $70 put expiring 2023-09-15](https://user-images.githubusercontent.com/85772166/172723074-cd013225-9fc9-4eeb-adeb-ccc8a99f661a.png)

Plot the hisotorical greek data with, `grhist`
````
(🦋) /stocks/options/ $ grhist -s 70 -p -g rho
````
![Historical Rho for $70 09/23 AAPL Put](https://user-images.githubusercontent.com/85772166/172723243-71b7e323-c3c4-4c7e-a463-f56d916a87fe.png)

`plot` gives the user flexibility to chart different variables.
````
(🦋) /stocks/options/ $ plot -p -x ltd -y s
````
![Stike vs Last Trade Date for Apple puts expiring Sep/23](https://user-images.githubusercontent.com/85772166/172723361-e57c656a-2202-4822-abc0-080c5f99d3e4.png)

Show the volatility surface of the entire chain using the command, `vsurf`
````
(🦋) /stocks/options/ $ vsurf
````
![Volatility surface of QQQ](https://user-images.githubusercontent.com/85772166/172723670-f1e3bc37-2655-4414-b0cb-3e173b48825d.png)