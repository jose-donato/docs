---
title: qtrcontracts
description: OpenBB Terminal Function
---

# Government

## qtrcontracts

### Description: 

Look at government contracts [Source: www.quiverquant.com]

### Usage: 
```python
usage: qtrcontracts [-l LIMIT] [-a {total,upmom,downmom}] [--raw]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of tickers to get | 5 | False | None |
| analysis | Analysis to look at contracts. 'Total' shows summed contracts. 'Upmom' shows highest sloped contacts while 'downmom' shows highest decreasing slopes. | total | False | total, upmom, downmom |
| raw | Print raw data. | None | False | None |


## Examples

```python

2022 Feb 16, 07:33 (✨) /stocks/gov/ $ qtrcontracts -l 20
   Quarterly Contracts
┏━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃      ┃ Total           ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ NYRT │ 189265686585.09 │
├──────┼─────────────────┤
│ LMT  │ 70707036450.10  │
├──────┼─────────────────┤
│ BA   │ 36291094000.97  │
├──────┼─────────────────┤
│ RTX  │ 30810798491.64  │
├──────┼─────────────────┤
│ NOC  │ 18155712025.66  │
├──────┼─────────────────┤
│ MCK  │ 15593287674.59  │
├──────┼─────────────────┤
│ AAL  │ 12873580340.33  │
├──────┼─────────────────┤
│ DAL  │ 12053655150.25  │
├──────┼─────────────────┤
│ GD   │ 11113338870.17  │
├──────┼─────────────────┤
│ UAL  │ 10937247542.42  │
├──────┼─────────────────┤
│ HUM  │ 10433454331.45  │
├──────┼─────────────────┤
│ FLR  │ 7630289754.85   │
├──────┼─────────────────┤
│ SO   │ 7451534354.06   │
├──────┼─────────────────┤
│ LUV  │ 7218696161.20   │
├──────┼─────────────────┤
│ MRNA │ 6233021716.31   │
├──────┼─────────────────┤
│ PFE  │ 5717928167.45   │
├──────┼─────────────────┤
│ SSB  │ 5122966968.19   │
├──────┼─────────────────┤
│ GE   │ 4973975130.38   │
├──────┼─────────────────┤
│ EXPR │ 4617652107.41   │
├──────┼─────────────────┤
│ PW   │ 4466721029.89   │
└──────┴─────────────────┘

```

