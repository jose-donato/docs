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
```

![Docstrings](https://user-images.githubusercontent.com/85772166/201577582-837a4d57-0274-4189-bda9-70a552ba821a.png "Docstrings")

### **OpenBBUserData Folder**

The OpenBB SDK shares settings, keys, and the [OpenBBUserData](https://openbb-finance.github.io/OpenBBTerminal/#importing-and-exporting-data-in-the-openbb-terminal) folder with the Terminal. Portfolio files, screener presets, and Matplotlib style sheets are all shared resources. This folder will be created only after the first installation and it is read by subsequent installations. In functions where files are read from these locations, like screeners, it is not neccessary to include the full path. The code block below returns results from the stock screener, using the preset, `unusual_options`.

```python
results = []

results = obb.stocks.screener.screener_data(
    preset_loaded = 'unusual_volume.ini',
    data_type = 'technical',
    limit = 5,
)

results.sort_values(ascending = False, by = ['Volume'])
```

![obb.stocks.screener.screener_data](https://user-images.githubusercontent.com/85772166/201580716-9d42387f-de0a-40fd-abc6-46b47c0968a8.png "obb.stocks.screener.screener_data")

### **API Keys**

API keys can be managed directly from the SDK environment. If there is already a Terminal installation configured with API keys, they will be recognized by the SDK. Their status can be verified with the line of code below.

```python
obb.keys.mykeys(show = True)
```

Removing `show = True` from the syntax will hide the values for the keys, as shown in the screenshot below.

![obb.keys.mykeys](https://user-images.githubusercontent.com/85772166/201581461-426d717f-26df-4f94-b0b7-22a0f4473662.png "obb.keys.mykeys")

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

quandl.get("LBMA/GOLD", collapse="monthly", transform="", index_col=0, order="desc", parse_dates=True, authtoken=f"{cfg.API_KEY_QUANDL}")
```

![LBMA/GOLD](https://user-images.githubusercontent.com/85772166/201581907-e7566940-bd68-44dc-965c-ebfd29cecc64.png "LBMA/GOLD")

Refer to the [Keys Guide](https://openbb-finance.github.io/OpenBBTerminal/SDK/keys/) for more information about managing API keys.

### **Requesting and Handling Data**

The results from data functions are not stored to memory unless explicitly instructed to. Most functions returning data are presented as a Pandas DataFrame.

```python
obb.economy.events()
```

Modify the syntax slightly to deliver the output into a DataFrame:

```python
economic_calendar = obb.economy.events()
```

![obb.economy.events](https://user-images.githubusercontent.com/85772166/201582071-5dff79ed-66b9-405c-8423-f366e61a2f22.png "obb.economy.events")

Defined as a variable, interacting with the results becomes a matter of manipulating tables. For example, the code block below will filter the results of the events function to display only events scheduled at a specific time.

```python
economic_calendar = obb.economy.events()
economic_calendar.set_index(keys = ['Time (GMT)'], append = True, inplace = True)
economic_calendar.filter(like = '14:30', axis = 0)
```

![Filtered Economic Calendar](https://user-images.githubusercontent.com/85772166/201582112-314ac01e-dbff-470d-b4eb-b7b15e63f2ef.png)

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

The choices for the `source` are currently:

  -  YahooFinance (default)
  -  IEXCloud
  -  AlphaVantage
  -  Polygon
  -  EODHD

Each source may have unique arguments, consult the docstrings for specfic details. If the command syntax is not framed as a variable assignment, results are printed as a table. When assigned to a variable, the table is not displayed.

![obb.stocks.load](https://user-images.githubusercontent.com/85772166/201582163-b320b396-1272-4cd2-aacb-3d50bd5ffd14.png)

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

spx_daily
```

![Alternative Data Collection](https://user-images.githubusercontent.com/85772166/201582840-8774148b-898c-41fa-8ea9-056383e0b657.png)

Where the input to a function is a list, it may be desireable to derive that list from a different function. This can be useful for screening tickers, or analyzing particular industries or sectors. The Comparison Analysis sub-module, within Stocks, is one set of functions that can benefit from this kind of workflow. Instead of something like:

```python
obb.stocks.ca.screener(similar = ['AAPL', 'NFLX', 'META', 'AMZN', 'MSFT', 'GOOGL', 'DIS', 'TSLA'], data_type = 'valuation')
```

Try, `obb.etf.holdings`, to populate a list dynamically:

```python
symbols = obb.etf.holdings('DIA')
dia_symbols = list(symbols.index.drop(['N/A']))
dia_valuation = obb.stocks.ca.screener(similar = dia_symbols, data_type = 'valuation')
dia_valuation.sort_values(by = ['Price'], ascending = False).convert_dtypes()
```

![obb.stocks.ca.screener](https://user-images.githubusercontent.com/85772166/201583027-141f9cee-a5ed-41a3-8283-9e5c61c626ad.png)

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

![obb.common.ta.donchian](https://user-images.githubusercontent.com/85772166/201583794-ddddbaf9-77e7-46f1-91c9-86558fd754c0.png "obb.common.ta.donchian")

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

The next section will detail how to keep the OpenBB SDK up-to-date.
