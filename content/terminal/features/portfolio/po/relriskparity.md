---
title: relriskparity
description: OpenBB Terminal Function
---

# Portfolio Optimization

## relriskparity

### Description: 

Build a relaxed risk parity portfolio based on least squares approach

### Usage: 
```python
usage: relriskparity [-ve {A,B,C}] [-rc RISK_CONTRIBUTION] [-pf PENAL_FACTOR] [-tr TARGET_RETURN] [-de SMOOTHING_FACTOR_EWMA] [-mt NAN_FILL_METHOD] [-ct CATEGORIES] [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-v LONG_ALLOCATION] [--name NAME] {sa} ...
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| risk_parity_model | version of relaxed risk parity model: Possible values are: 'A': risk parity without regularization and penalization constraints 'B': with regularization constraint but without penalization constraint 'C': with regularization and penalization constraints | A | False | A, B, C |
| risk_contribution | Vector of risk contribution constraints | None | False | None |
| penal_factor | The penalization factor of penalization constraints. Only used with version 'C'. | 1 | False | None |
| target_return | Constraint on minimum level of portfolio's return | -1 | False | None |
| smoothing_factor_ewma | Smoothing factor for ewma estimators | 0.94 | False | None |
| ==SUPPRESS== | sensitivity analysis | None | False | sa:  ArgumentParser(prog='relriskparity sa', usage=None, description=None, formatter_class=<class 'argparse.HelpFormatter'>, conflict_handler='error', add_help=True) |
| nan_fill_method | Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points | time | False | None |
| categories | Show selected categories | None | False | None |
| historic_period | Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset | 3y | False | None |
| start_period | Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| end_period | End date to get yfinance data from. Must be in 'YYYY-MM-DD' format | None | False | None |
| log_returns | If use logarithmic or arithmetic returns to calculate returns | None | False | None |
| return_frequency | Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns | d | False | d, w, m |
| max_nan | Max percentage of nan values accepted per asset to be considered in the optimization process | 0.05 | False | None |
| threshold_value | Value used to replace outliers that are higher to threshold in absolute value | 0.3 | False | None |
| long_allocation | Amount to allocate to portfolio | 1 | False | None |
| name | Save portfolio with personalized or default name | RRP_0 | False | None |


## Examples

```python

2022 Apr 05, 14:08 (🦋) /portfolio/po/ $ relriskparity

 [3 Years] Relaxed risk parity portfolio based on least squares approach

     Weights
┏━━━━━━┳━━━━━━━━━┓
┃      ┃ Value   ┃
┡━━━━━━╇━━━━━━━━━┩
│ AAPL │ 13.42 % │
├──────┼─────────┤
│ AMZN │ 16.51 % │
├──────┼─────────┤
│ BA   │ 10.18 % │
├──────┼─────────┤
│ FB   │ 12.83 % │
├──────┼─────────┤
│ MSFT │ 14.36 % │
├──────┼─────────┤
│ T    │ 24.0 %  │
├──────┼─────────┤
│ TSLA │  8.68 % │
└──────┴─────────┘

Annual (by 252) expected return: 28.99%
Annual (by √252) volatility: 26.60%
Sharpe ratio: 1.0899

```

