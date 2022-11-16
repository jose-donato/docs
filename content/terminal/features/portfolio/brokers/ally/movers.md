---
title: movers
description: OpenBB Terminal Function
---

# Ally

## movers

### Description: 

Get stock movers

### Usage: 
```python
usage: movers [-t {toplosers,toppctlosers,topvolume,topactive,topgainers,toppctgainers}] [-e {A,N,Q,U,V}] [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| list_type | List to get movers of | topactive | False | toplosers, toppctlosers, topvolume, topactive, topgainers, toppctgainers |
| exchange | Exchange to look at. Can be A:American Stock Exchange. N:New York Stock Exchange. Q:NASDAQ U:NASDAQ Bulletin Board V:NASDAQ OTC Other | N | False | A, N, Q, U, V |
| limit | Number to show | 15 | False | None |


