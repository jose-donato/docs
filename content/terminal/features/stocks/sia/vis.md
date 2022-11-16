---
title: vis
description: OpenBB Terminal Function
---

# Sector Industry Analysis

## vis

### Description: 

Visualize a particular metric with the filters selected

### Usage: 
```python
usage: vis -m {ce,sti,cce,rec,inv,oca,tca,ppe,lti,gai,olta,tlta,ta,ap,dr,cd,ocl,tcl,ltd,oltl,tltl,tl,ret,ci,se,tle,ninc,da,sbc,ooa,ocf,cex,acq,cii,oia,icf,dp,si,di,ofa,fcf,ncf,re,cr,gp,sga,rd,ooe,oi,ie,oe,it,ni,pd} [-p PERIOD] [-c CURRENCY]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| metric | Metric to visualize | None | True | ce, sti, cce, rec, inv, oca, tca, ppe, lti, gai, olta, tlta, ta, ap, dr, cd, ocl, tcl, ltd, oltl, tltl, tl, ret, ci, se, tle, ninc, da, sbc, ooa, ocf, cex, acq, cii, oia, icf, dp, si, di, ofa, fcf, ncf, re, cr, gp, sga, rd, ooe, oi, ie, oe, it, ni, pd |
| period | Limit number of periods to display | 12 | False | None |
| currency | Convert the currency of the chosen country to a specified currency. By default, this is set to USD (US Dollars). | USD | False | None |


