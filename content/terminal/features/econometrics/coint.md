---
title: coint
description: OpenBB Terminal Function
---

# Econometrics

## coint

### Description: 

Show co-integration between two timeseries

### Usage: 
```python
usage: coint -t TS [-p] [-s SIGNIFICANT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| ts | The time series you wish to test co-integration on. E.g. historical.open,historical2.close. | None | False | None |
| plot | Plot Z-Values | False | True | None |
| significant | Show only companies that have p-values lower than this percentage | 0 | True | None |


## Examples

```python

2022 Feb 24, 06:03 (✨) /econometrics/ $ coint msft.adj_close,aapl.adj_close,tsla.adj_close,googl.adj_close -p
                                  Cointegration Tests
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━━━━┳━━━━━━━━━┓
┃ Pairs                          ┃ Constant ┃ Gamma ┃ Alpha ┃ Dickey-Fuller ┃ P Value ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━━━━╇━━━━━━━━━┩
│ adj_close-msft/adj_close-aapl  │ 46.62    │ 1.58  │ 0.00  │ -1.86         │ 0.35    │
├────────────────────────────────┼──────────┼───────┼───────┼───────────────┼─────────┤
│ adj_close-msft/adj_close-tsla  │ 130.28   │ 0.18  │ -0.01 │ -2.82         │ 0.06    │
├────────────────────────────────┼──────────┼───────┼───────┼───────────────┼─────────┤
│ adj_close-msft/adj_close-googl │ 21.38    │ 0.10  │ -0.01 │ -2.51         │ 0.11    │
├────────────────────────────────┼──────────┼───────┼───────┼───────────────┼─────────┤
│ adj_close-aapl/adj_close-tsla  │ 53.92    │ 0.11  │ -0.01 │ -2.94         │ 0.04    │
├────────────────────────────────┼──────────┼───────┼───────┼───────────────┼─────────┤
│ adj_close-aapl/adj_close-googl │ -7.83    │ 0.06  │ -0.00 │ -1.62         │ 0.47    │
├────────────────────────────────┼──────────┼───────┼───────┼───────────────┼─────────┤
│ adj_close-tsla/adj_close-googl │ -505.14  │ 0.51  │ -0.01 │ -2.28         │ 0.18    │
└────────────────────────────────┴──────────┴───────┴───────┴───────────────┴─────────┘

```

![error_terms_cointegrations](https://user-images.githubusercontent.com/46355364/155514964-dd75cf17-91ae-4326-96e8-45d9a2c7b24a.png)

