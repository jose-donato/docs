---
title: Getting Started
sidebar_position: 2
---

The first step is to import the OpenBB SDK. Nearly everything required to interact with any function from the OpenBB Terminal gets imported in one line. Begin a Python script or Notebook file with:

```python
from openbb_terminal.sdk import openbb
```

While enough to use most functions, additional modules (already installed dependencies) must be imported in order to manipulate data, and also to display inline images. Some of the most commonly used items will be:

  -  Pandas
  -  Numpy
  -  Matplotlib
  -  Requests
  -  JSON

The first code block, within the Python script or Jupyter Notebook file, will expand to include these general-purpose modules.

```python
import json
import requests
import pandas as pd
import numpy as np

from matplotlib import pyplot as plt

from openbb_terminal.sdk import openbb as obb

%matplotlib inline
```

Example snippets used in the remainder of this guide will assume the code block above is placed in the first cell, and that the `Python kernel` selected is the environment created during the installation process.

### **Navigation**

In the same way as operating the OpenBB Terminal, functions are divided into menus which are scrollable after code completion is activated. Entering a period, `.`, after `obb`, will display the menus from the `home` screen of the OpenBB Terminal. Sub-menus follow the same path as the Terminal.

![Navigation](https://user-images.githubusercontent.com/85772166/201574108-18e43425-5c14-47e7-a609-295e980f6c81.png "Navigation")


An alternate way to view the contents of a menu is to use Python's built-in help.

```python
help(openbb.stocks.dd)

Help on Breadcrumb in module openbb_terminal.core.library.breadcrumb:

<openbb_terminal.core.library.breadcrumb.Breadcrumb object>
    DD Menu
    
    The SDK commands of the the menu:
            <openbb>.stocks.dd.customer
            <openbb>.stocks.dd.news
            <openbb>.stocks.dd.rating
            <openbb>.stocks.dd.supplier
            <openbb>.stocks.dd.sec
            <openbb>.stocks.dd.arktrades
            <openbb>.stocks.dd.analyst
            <openbb>.stocks.dd.rot
            <openbb>.stocks.dd.est
            <openbb>.stocks.dd.pt
```

### **Docstrings**

In addition to Python's built-in help, docstrings are also displayed in the Contextual Help window, within a Jupyter environment.

```python
help(obb.economy.events)

Help on Operation in module openbb_terminal.core.library.operation:

<openbb_terminal.core.library.operation.Operation object>
    Get economic calendar for countries between specified dates
    
    Parameters
    ----------
    countries : [List[str],str]
        List of countries to include in calendar.  Empty returns all
    start_date : str
        Start date for calendar
    end_date : str
        End date for calendar
    
    Returns
    -------
    pd.DataFrame
        Economic calendar
```

### **OpenBBUserData Folder**

The OpenBB SDK shares settings, keys, and the [OpenBBUserData](https://openbb-finance.github.io/OpenBBTerminal/#importing-and-exporting-data-in-the-openbb-terminal) folder with the Terminal. Portfolio files, screener presets, and Matplotlib style sheets are all shared resources. This folder will be created only after the first installation and it is read by subsequent installations. In functions where files are read from these locations, like screeners, it is not neccessary to include the full path. The code block below returns results from the stock screener, using the preset, `unusual_options`.

```python
results = []

results = obb.stocks.screener.screener_data(
    preset_loaded = 'unusual_volume.ini',
    data_type = 'technical',
    limit = 5,
)
results = results.sort_values(ascending = False, by = ['Volume'])
results.head(5)
```

|    | Ticker   |   Beta |   ATR |   SMA20 |   SMA50 |   SMA200 |   52W High |   52W Low |   RSI |   Price |   Change |   from Open |     Gap |      Volume |
|---:|:---------|-------:|------:|--------:|--------:|---------:|-----------:|----------:|------:|--------:|---------:|------------:|--------:|------------:|
| 48 | CUEN     |   0.61 |  0.04 | -0.0367 | -0.2802 |  -0.5626 |    -0.8793 |    0.1505 | 39.65 |    0.35 |   0.0494 |     -0.2249 |  0.3539 | 1.15487e+07 |
| 16 | PDSB     |   2.54 |  0.55 |  0.6788 |  1.0466 |   0.7899 |    -0.248  |    2.0104 | 83.52 |    8.7  |   0.2323 |      0.1951 |  0.0312 | 6.32774e+06 |
| 32 | IBTE     | nan    |  0.05 |  0.0025 | -0.0015 |  -0.0214 |    -0.0661 |    0.0076 | 53.72 |   23.89 |   0.0008 |      0.0004 |  0.0004 | 5.85758e+06 |
| 11 | PTLO     | nan    |  1.28 |  0.033  |  0.038  |   0.0368 |    -0.6097 |    0.5187 | 52.02 |   22.53 |  -0.0941 |     -0.004  | -0.0905 | 3.96768e+06 |
| 65 | ABMD     |   1.32 | 10.78 |  0.1822 |  0.3316 |   0.3296 |    -0.0201 |    0.7027 | 78.79 |  374.32 |   0.0006 |     -0.0006 |  0.0011 | 3.50787e+06 |

### **API Keys**

API keys can be managed directly from the SDK environment. If there is already a Terminal installation configured with API keys, they will be recognized by the SDK. Their status can be verified with the line of code below.

```python
obb.keys.mykeys(show = True)
```

Removing `show = True` from the syntax will hide the values for the keys, as shown in the screenshot below.

| API                       | Key     |
|:--------------------------|:--------|
| BINANCE_KEY               | ******* |
| BINANCE_SECRET            | ******* |
| BITQUERY_KEY              | ******* |
| CMC_KEY                   | ******* |
| COINBASE_KEY              | ******* |
| COINBASE_PASS_PHRASE      | ******* |
| COINBASE_SECRET           | ******* |
| COINGLASS_KEY             | ******* |
| CRYPTO_PANIC_KEY          | ******* |
| EODHD_KEY                 | ******* |
| ETHPLORER_KEY             | ******* |
...continued

Individual keys are entered like this example:

```python
obb.keys.fred(
    key = 'replace_me',
    persist = True,
)
```

In cases where API credentials must be passed to another process, use the following import statement:

```python
from openbb_terminal import config_terminal as cfg
```

Values can then be passed to a request URL as a variable, `f"{cfg.API_KEY_QUANDL}"`

![Quandl Get Request](https://user-images.githubusercontent.com/85772166/201581632-b02bcb6b-b54c-4d8c-814a-7adf69c6db60.png "Quandl Get Request")

The code block below will authorize Quandl to request data from Nasdaq Data Link. The series in the example is for the historical price of gold.

```python
import quandl
from openbb_terminal import config_terminal as cfg

gold = quandl.get("LBMA/GOLD", collapse="monthly", transform="", index_col=0, order="desc", parse_dates=True, authtoken=f"{cfg.API_KEY_QUANDL}")
```

| Date                |   USD (AM) |   USD (PM) |   GBP (AM) |   GBP (PM) |   EURO (AM) |   EURO (PM) |
|:--------------------|-----------:|-----------:|-----------:|-----------:|------------:|------------:|
| 2022-11-30 00:00:00 |    1757.35 |    1768.9  |    1491.46 |    1506.57 |     1704.98 |     1714.06 |
| 2022-10-31 00:00:00 |    1638.85 |    1639    |    1419.74 |    1425.27 |     1649.5  |     1656.87 |
| 2022-09-30 00:00:00 |    1672.75 |    1671.75 |    1495.94 |    1502.4  |     1703.7  |     1710.53 |
| 2022-08-31 00:00:00 |    1712.4  |    1715.9  |    1472.15 |    1478.08 |     1713.6  |     1715.21 |
| 2022-07-31 00:00:00 |    1758.9  |    1753.4  |    1447.4  |    1451.64 |     1724.07 |     1725.7  |
...continued

Refer to the [Keys Guide](https://openbb-finance.github.io/OpenBBTerminal/SDK/keys/) for more information about managing API keys.

### **Requesting and Handling Data**

The results from data functions are not stored to memory unless explicitly instructed to. Most functions returning data are presented as a Pandas DataFrame.

```python
obb.economy.events()
```

|    | Time (GMT)   | Country        | Event                         | actual   | consensus   | previous   | Date       |
|---:|:-------------|:---------------|:------------------------------|:---------|:------------|:-----------|:-----------|
|  0 | 01:30        | France         | French Unemployment Rate      | 7.3%     | 7.3%        | 7.4%       | 2022-11-15 |
|  1 | 02:00        | United Kingdom | Average Earnings ex Bonus     | 5.7%     | 5.5%        | 5.5%       | 2022-11-15 |
|  2 | 02:00        | United Kingdom | Average Earnings Index +Bonus | 6.0%     | 5.9%        | 6.1%       | 2022-11-15 |
|  3 | 02:00        | United Kingdom | Claimant Count Change         | 3.3K     | 17.3K       | 3.9K       | 2022-11-15 |
|  4 | 02:00        | United Kingdom | Employment Change 3M/3M       | -52K     | -25K        | -109K      | 2022-11-15 |
...continued

Modify the syntax slightly to deliver the output into a DataFrame:

```python
economic_calendar = obb.economy.events()
```

Defined as a variable, interacting with the results becomes a matter of manipulating tables. For example, the code block below will filter the results of the events function to display only events scheduled at a specific time.

```python
economic_calendar = obb.economy.events()
economic_calendar.set_index(keys = ['Time (GMT)'], append = True, inplace = True)
events = economic_calendar.filter(like = '9:00', axis = 0)

events
```

|       | Country       | Event                                  | actual   | consensus   | previous   | Date       |
|:------|:--------------|:---------------------------------------|:---------|:------------|:-----------|:-----------|
| 09:00 | United States | Fed Governor Cook Speaks               | -        | -           | -          | 2022-11-15 |
| 09:00 | Germany       | German Buba Balz Speaks                | -        | -           | -          | 2022-11-15 |
| 09:00 | Germany       | German Buba Vice President Buch Speaks | -        | -           | -          | 2022-11-15 |
...continued

Some functions have the built-in capability of requesting data from multiple sources. `obb.stocks.load` is one example of this type feature:

```python
obb.stocks.load(
    symbol = 'SPY',
    start_date = '2022-10-01',
    end_date = '2022-11-11',
    interval = 15,
    prepost = True,
    source = 'YahooFinance',
    weekly = False,
    monthly = False,
)
```

| date                |    Open |   High |    Low |   Close |   Adj Close |      Volume |
|:--------------------|--------:|-------:|-------:|--------:|------------:|------------:|
| 2022-11-15 15:00:00 | 398.68  | 399.4  | 398.13 | 398.47  |     398.47  | 2.46198e+06 |
| 2022-11-15 15:15:00 | 398.475 | 399.52 | 398.46 | 398.913 |     398.913 | 2.8631e+06  |
| 2022-11-15 15:30:00 | 398.93  | 399.27 | 397.82 | 399.11  |     399.11  | 3.03659e+06 |
| 2022-11-15 15:45:00 | 399.114 | 399.13 | 397.46 | 398.53  |     398.53  | 6.46879e+06 |
| 2022-11-15 16:00:00 | 398.54  | 399.06 | 395.01 | 398.175 |     398.175 | 1.99462e+06 |
...continued

The choices for the `source` are currently:

  -  YahooFinance (default)
  -  IEXCloud
  -  AlphaVantage
  -  Polygon
  -  EODHD

Each source may have unique arguments, consult the docstrings for specfic details. If the command syntax is not framed as a variable assignment, results are printed as a table. When assigned to a variable, the table is not displayed.

There are functions which return a Tuple, and they can be identified through the docstrings. It will also be evident when the returned data is not presented as a DataFrame. The list, highlighted in the right frame of the image below, provides guidance for unpacking the results.

![Tuples](https://user-images.githubusercontent.com/85772166/201582221-8203a240-aa74-4755-989d-8cac167e40c6.png "Tuples")

The two elements within this Tuple are a DataFrame, and a String. Variables are assigned in the order described by the docstrings.

```python
data,title = obb.crypto.dd.mt(symbol = 'ETH', timeseries_id = 'act.addr.cnt', start_date = '2019-01-01')
```

Data need not be collected by the OpenBB SDK in order for it to be passed through the functions. Local files can be read with Pandas functions such as, `pd.read_csv()`. Importing an additional module, `pandas_datareader`, is a low-code method for requesting data from alternate sources.

```python
import pandas_datareader as pdr

spx_daily = pdr.get_data_stooq('^SPX', start = '1990-11-11')

spx_daily.tail(5)
```

| Date                |   Open |   High |    Low |   Close |      Volume |
|:--------------------|-------:|-------:|-------:|--------:|------------:|
| 1990-11-16 00:00:00 | 317.02 | 318.8  | 314.99 |  317.12 | 9.19111e+07 |
| 1990-11-15 00:00:00 | 320.4  | 320.4  | 316.13 |  317.02 | 8.40944e+07 |
| 1990-11-14 00:00:00 | 317.66 | 321.7  | 317.23 |  320.4  | 9.96167e+07 |
| 1990-11-13 00:00:00 | 319.48 | 319.48 | 317.26 |  317.67 | 8.90222e+07 |
| 1990-11-12 00:00:00 | 313.74 | 319.77 | 313.73 |  319.48 | 8.96611e+07 |
...continued

Where the input to a function is a list, it may be desireable to derive that list from a different function. This can be useful for screening tickers, or analyzing particular industries or sectors. The Comparison Analysis sub-module, within Stocks, is one set of functions that can benefit from this kind of workflow. Instead of something like:

```python
obb.stocks.ca.screener(similar = ['AAPL', 'NFLX', 'META', 'AMZN', 'MSFT', 'GOOGL', 'DIS', 'TSLA'], data_type = 'valuation')
```

Try, `obb.etf.holdings`, to populate a list dynamically:

```python
symbols = obb.etf.holdings('DIA')
dia_symbols = list(symbols.index.drop(['N/A']))
dia_valuation = obb.stocks.ca.screener(similar = dia_symbols, data_type = 'valuation')
dia_valuation = dia_valuation.sort_values(by = ['Price'], ascending = False).convert_dtypes()

dia_valuation.head(5)
```

|    | Ticker   |   Market Cap |   P/E |   Fwd P/E | PEG   |   P/S | P/B     |    P/C |   P/FCF |   EPS this Y |   EPS next Y |   EPS past 5Y |   EPS next 5Y |   Sales past 5Y |   Price |   Change |   Volume |
|---:|:---------|-------------:|------:|----------:|:------|------:|:--------|-------:|--------:|-------------:|-------------:|--------------:|--------------:|----------------:|--------:|---------:|---------:|
| 25 | UNH      |   5.0033e+11 | 25.17 |     20.61 | 1.77  |  1.59 | 6.43    |  12.88 |   19.61 |        0.128 |       0.1315 |         0.201 |        0.1422 |           0.092 |  503.01 |  -0.0209 |  5007787 |
| 10 | GS       |   1.282e+11  | 10.18 |     10.17 | <NA>  |  2.08 | 1.24    |   0.45 |    2.98 |        1.403 |       0.0976 |         0.296 |       -0.0912 |           0.113 |  382.88 |   0.0014 |  3184768 |
| 11 | HD       |   3.1097e+11 | 18.86 |     17.86 | 1.2   |  2    | 1334.43 | 247    |   89.72 |        0.301 |       0.0361 |         0.192 |        0.157  |           0.098 |  311.93 |   0.0163 |  9239159 |
|  1 | AMGN     |   1.5543e+11 | 22.86 |     15.4  | 3.38  |  5.9  | 41.77   |  13.54 |   32.04 |       -0.165 |       0.0486 |         0.001 |        0.0677 |           0.025 |  283.6  |  -0.006  |  2761083 |
| 18 | MCD      |   2.0272e+11 | 34.3  |     26.01 | 5.14  |  8.71 | <NA>    |  71.67 |  118.65 |        0.591 |       0.0522 |         0.13  |        0.0667 |          -0.012 |  267.84 |  -0.0163 |  5421817 |
...continued

### Displaying Charts

The OpenBB SDK has built-in charting libraries for Matplotlib, for any chart available from the Terminal. User style sheets can be added to the folder, `~/OpenBBUserData/styles/user`. Styles are shared properties between the OpenBB Terminal and the SDK.

Functions, such as `candle`, exist to display charts. Others, like those within the Technical Analysis module, have the option to return either, a chart or raw data. The next examples will outline a few different scenarios.

Data from the previous example, `spx_daily`, can feed the inputs to the `obb.stocks.candle` function. However, if this particular `DateTime Index` remains sorted by descending dates, the x-axis will be backwards and the chart will read from right-to-left. To correct this, sort the index with `ascending = True`.

```python
spx_daily.sort_index(ascending = True, inplace = True)
obb.stocks.candle(data = spx_daily, symbol = 'Daily SPX Chart from November 12, 1990')
```

![obb.stocks.candle](https://user-images.githubusercontent.com/85772166/201583252-d8f94077-bfde-4b6e-984b-a6bec1986e29.png "obb.stocks.candle")

If there is no data already in memory, assign the `data` argument as a load function, for example:

```python
obb.stocks.candle(
    data = obb.stocks.load(
        symbol = 'SPY', 
        start_date = '1993-11-11',
        monthly = True),
    symbol = 'SPY - Monthly Chart from November, 1993'
)
```

![obb.stocks.candle](https://user-images.githubusercontent.com/85772166/201583325-4383c712-6210-4395-8a21-6b7645275336.png "obb.stocks.candle")

When the returned results can be either, a chart or a table, adding `chart = True` to the syntax will display the chart instead of a table. For example, Donchian Channels:

```python
obb.common.ta.donchian(obb.stocks.load('SPY', interval = 15))
```

| date                |   DCL_20_20 |   DCM_20_20 |   DCU_20_20 |
|:--------------------|------------:|------------:|------------:|
| 2022-11-15 14:45:00 |      394.49 |     398.33  |     402.17  |
| 2022-11-15 15:00:00 |      394.49 |     398.195 |     401.9   |
| 2022-11-15 15:15:00 |      394.49 |     398.195 |     401.9   |
| 2022-11-15 15:30:00 |      394.49 |     398.105 |     401.72  |
| 2022-11-15 15:45:00 |      394.49 |     398.027 |     401.565 |
...continued
  
```python
obb.common.ta.donchian(
    data = obb.stocks.load('SPY', interval = 15),
    chart = True,
    symbol = 'SPY 15 Minute Data'
)
```

![obb.common.ta.donchian](https://user-images.githubusercontent.com/85772166/201583866-33b5e950-1c00-4ee4-8792-960cbf003162.png "obb.common.ta.donchian")

Futures curves are another example where this syntax is applied:

```python
obb.futures.curve('GE', chart = True)
```

![obb.futures.curve](https://user-images.githubusercontent.com/85772166/201583945-18364efa-c305-4c1a-a032-f779e28894c8.png "obb.futures.curve")

The guides for each module explore functions and provides sample code snippets. Refer to each for more more about them.
