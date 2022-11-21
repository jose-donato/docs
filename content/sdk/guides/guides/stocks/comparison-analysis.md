---
title: Comparison Analysis
keywords:
  [
    "stocks, stock, options, option, comparison, analysis, tickers, stocks, insight"
  ]
excerpt: "This guide introduces the CA SDK in the context of the OpenBB SDK."
---

The CA module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering `.`, after, `openbb.ca`
​

## How to Use

​
The examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:
​

```python
from openbb_terminal.sdk import openbb
```

​
A brief description below highlights the main Functions and Modules available in the ETF SDK

| Path                       |    Type    |                                  Description |
| :------------------------- | :--------: | -------------------------------------------: |
| openbb.ca.balance          |  Function  |                Balance Financials Comparison |
| openbb.ca.hcorr            |  Function  |                 Historical Price Correlation |
| openbb.ca.volume           |  Function  |            Historical Volume Data Comparison |
| openbb.ca.scorr            |  Function  |                        Sentiment Correlation | 
| openbb.ca.hist             |  Function  |             Historical Price Data Comparison |
| openbb.ca.sentiment        |  Function  |                Sentiment Analysis Comparison |
| openbb.ca.polygon_peers    |  Function  |                 Similar Tickers from Polygon |
| openbb.ca.finviz_peers     |  Function  |                  Similar Tickers from Finvix |
| openbb.ca.income           |  Function  |                 Income Financials Comparison |
| openbb.ca.cashflow         |  Function  |               Cashflow Financials Comparison |
| openbb.ca.screener         |  Function  |                            Screener Overview |

Alteratively you can print the contents of the ETF SDK with:

```python
help(openbb.ca)
```

## Examples

### balance

The balance commands allows use to compare the balance sheets for various companies

```python
openbb.stocks.ca.balance(["TSLA","F", "GE"])
```

![Balance Sheet](https://user-images.githubusercontent.com/72827203/203100726-057ac632-b270-4ca3-b2d3-e0481c435b9f.png)

### sentiment

Produces a table with sentiment over time for a given list of tickers

```python
openbb.stocks.ca.sentiment(["tsla", "aapl"])
```

![Sentiment Table](https://user-images.githubusercontent.com/72827203/203102143-23b4b3b0-02a0-4947-9c1e-cc7bbaa5f0f6.png)

​

### scr

Show a high-level overview of company information for tickers in a given list

```python
openbb.stocks.ca.screener(["tsla", "aapl"])
```

![Screener](https://user-images.githubusercontent.com/72827203/203152991-09e85e5b-432d-4443-b53d-eb8454528bbb.png)
