---
title: Introduction to Futures
keywords: "futures, sdk, python, api, yfinance, derivatives, financial, cme, cbt, nym, cmx, commodity, commodities, rates, future, interest, derivative, softs, grains, ags, hydrocarbons, index"
excerpt: "This guide introduces the Futures module, from the OpenBB SDK"
geekdocCollapseSection: true
---
The functionality from the OpenBB Terminal is part of the SDK layer, and provides methods for programmatically accessing the data and charts associated with them. Get started by importing the OpenBB SDK to the Python script or Jupyter Notebook file.

```python
from openbb_terminal.sdk import openbb as obb
import pandas as pd
%matplotlib inline

help(obb.futures)
```

```console
Help on Breadcrumb in module openbb_terminal.core.library.breadcrumb:

<openbb_terminal.core.library.breadcrumb.Breadcrumb object>
    FUTURES Menu
    
    The SDK commands of the the menu:
            <openbb>.futures.curve
            <openbb>.futures.historical
            <openbb>.futures.search
```

## How to Use

Futures can be searched by description, exchange, or category. 

```python
obb.futures.search(description = 'Eurodollar')
```

|     | Ticker   | Description                          | Exchange   | Category   |
|----:|:---------|:-------------------------------------|:-----------|:-----------|
|  66 | GE       | Eurodollar Futures                   | CME        | currency   |
|  67 | GLB      | One-Month Eurodollar Futures         | CME        | currency   |
| 152 | SED      | SED (SOFR-Eurodollar) Spread Futures | CME        | bonds      |

The historical front-month price is captured in a Pandas DataFrame with:

```python
ge_continuous = obb.futures.historical(symbols = ['GE'])
```

**Note**: Take notice of the syntax here. The `symbols` - plural - argument is expecting a list as the input.

Multiple symbols can be collected as a single DataFrame:

```python
sp_futures = obb.futures.historical(['ES', 'EST'])
sp_futures.tail(5)
```

| Date                |   Adj Close (ES) |   Adj Close (EST) |   Close (ES) |   Close (EST) |   High (ES) |   High (EST) |   Low (ES) |   Low (EST) |   Open (ES) |   Open (EST) |   Volume (ES) |   Volume (EST) |
|:--------------------|----------------------:|-----------------------:|------------------:|-------------------:|-----------------:|------------------:|----------------:|-----------------:|-----------------:|------------------:|-------------------:|--------------------:|
| 2022-11-07 00:00:00 |               3815.25 |                   7.65 |           3815.25 |               7.65 |          3821.75 |              8.4  |         3738.25 |             7.1  |          3750    |              7.1  |        1.48315e+06 |               43515 |
| 2022-11-08 00:00:00 |               3835.25 |                   7.1  |           3835.25 |               7.1  |          3867    |              7.8  |         3792.75 |             6.55 |          3812.75 |              7.2  |        1.87805e+06 |               41492 |
| 2022-11-09 00:00:00 |               3755.5  |                   6.25 |           3755.5  |               6.25 |          3848.75 |              6.95 |         3750    |             6.05 |          3832.5  |              6.9  |        1.88915e+06 |               56457 |
| 2022-11-10 00:00:00 |               3961    |                   6.9  |           3961    |               6.9  |          3973.5  |              7.2  |         3751.5  |             5.85 |          3757    |              6.3  |        2.4081e+06  |               48165 |
| 2022-11-11 00:00:00 |               4000.25 |                   7.3  |           4000.25 |               7.3  |          4009.75 |              7.45 |         3951    |             6.45 |          3973    |              6.45 |        2.4081e+06  |               48165 |

Get the components of the current term structure:

```python
obb.futures.curve('ES')
```

|                     |   Futures |
|:--------------------|----------:|
| 2022-12-01 00:00:00 |   4000.25 |
| 2023-03-01 00:00:00 |   4033    |
| 2023-06-01 00:00:00 |   4068.5  |
| 2023-09-01 00:00:00 |   4100    |
| 2023-12-01 00:00:00 |   4141    |

A chart can be displayed, instead of the table, by adding `chart = True` to the function's syntax:

```python
obb.futures.curve('CL')
```

![obb.futures.curve](https://user-images.githubusercontent.com/85772166/201829309-c6c3ae53-6629-49fb-b709-d740f3d7f16a.png "obb.futures.curve")

Historical data for each contract, when available, can be collected from the `historical` function:

```python
cl_2312 = obb.futures.historical(symbols = ['CL'], expiry = '2023-12')
cl_2412 = obb.futures.historical(symbols = ['CL'], expiry = '2024-12')
cl_2512 = obb.futures.historical(symbols = ['CL'], expiry = '2025-12')

cl_columns = ['Dec 2023', 'Dec 2024', 'Dec 2025']

cl_historical = pd.DataFrame(columns = cl_columns)
cl_historical = cl_historical.reindex_like(cl_2312)
cl_historical = pd.DataFrame(cl_historical, columns = cl_columns)

cl_historical['Dec 2023'].update(cl_2312['Adj Close'])
cl_historical['Dec 2024'].update(cl_2412['Adj Close'])
cl_historical['Dec 2025'].update(cl_2512['Adj Close'])

cl_historical.tail(10)
```

| Date                |   Dec 2023 |   Dec 2024 |   Dec 2025 |
|:--------------------|-----------:|-----------:|-----------:|
| 2022-11-01 00:00:00 |      77.51 |      72.31 |      68.71 |
| 2022-11-02 00:00:00 |      79.23 |      73.66 |      69.68 |
| 2022-11-03 00:00:00 |      78.18 |      72.85 |      69.08 |
| 2022-11-04 00:00:00 |      80.8  |      74.57 |      70.11 |
| 2022-11-07 00:00:00 |      80.65 |      74.47 |      70.16 |
| 2022-11-08 00:00:00 |      78.94 |      73.27 |      69.23 |
| 2022-11-09 00:00:00 |      76.69 |      71.62 |      68.01 |
| 2022-11-10 00:00:00 |      77    |      71.64 |      67.89 |
| 2022-11-11 00:00:00 |      78.81 |      73.1  |      69.22 |
| 2022-11-14 00:00:00 |      77.4  |      72.35 |      69.15 |
