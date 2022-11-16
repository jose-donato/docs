---
title: grhist
description: OpenBB Terminal Function
---

# Options

## grhist

### Description: 

Plot historical option greeks.

### Usage: 
```python
usage: grhist -s STRIKE [-p] [-g {iv,gamma,theta,vega,delta,rho,premium}] [-c CHAIN_ID] [-r] [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| strike | Strike price to look at | None | True | None |
| put | Flag for showing put option | None | False | None |
| greek | Greek column to select | delta | False | iv, gamma, theta, vega, delta, rho, premium |
| chain_id | OCC option symbol | None | False | None |
| raw | Display raw data | None | False | None |
| limit | Limit of raw data rows to display | 20 | False | None |


