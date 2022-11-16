---
title: load
description: OpenBB Terminal Function
---

# Portfolio_Analysis

## load

### Description: 

Function to get portfolio from predefined csv/json/xlsx file inside portfolios folder

### Usage: 
```python
usage: load [-s] [-c] [--no_last_price] [--nan] [-p {}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| sector | Add sector to dataframe | None | False | None |
| country | Add country to dataframe | None | False | None |
| last_price | Don't add last price from yfinance | True | False | None |
| show_nan | Show nan entries | None | False | None |
| path | Path to portfolio file | my_portfolio.csv | False |  |


