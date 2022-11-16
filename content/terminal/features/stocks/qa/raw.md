---
title: raw
description: OpenBB Terminal Function
---

# Quantitative Analysis

## raw

### Description: 

Print raw data to console

### Usage: 
```python
usage: raw [-l LIMIT] [-r] [-s {open,high,low,close,adjclose,volume,date_id,oc_high,oc_low,returns,logret,logprice}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number to show | 20 | False | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| sortby | The column to sort by | None | False | open, high, low, close, adjclose, volume, date_id, oc_high, oc_low, returns, logret, logprice |


