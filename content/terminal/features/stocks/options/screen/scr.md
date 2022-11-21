---
title: scr
description: OpenBB Terminal Function
---

# scr

Screener filter output from https://ops.syncretism.io/index.html. Where: CS: Contract Symbol; S: Symbol, T: Option Type; Str: Strike; Exp v: Expiration; IV: Implied Volatility; LP: Last Price; B: Bid; A: Ask; V: Volume; OI: Open Interest; Y: Yield; MY: Monthly Yield; SMP: Regular Market Price; SMDL: Regular Market Day Low; SMDH: Regular Market Day High; LU: Last Trade Date; LC: Last Crawl; ITM: In The Money; PC: Price Change; PB: Price-to-book.

### Usage

```python
usage: scr [-p {3DTE_Degenerate.ini,Highest_IV.ini,Highest_OI.ini,Highest_Volume.ini,high_IV.ini,Long_FAANGM.ini,SPY_ATM_Calls.ini,SPY_ATM_Poots.ini,template.ini,TSLA_Calls_90Days.ini,TSLA_Poots.ini}] [-l LIMIT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| preset | Filter presets | high_IV | True | 3DTE_Degenerate.ini, Highest_IV.ini, Highest_OI.ini, Highest_Volume.ini, high_IV.ini, Long_FAANGM.ini, SPY_ATM_Calls.ini, SPY_ATM_Poots.ini, template.ini, TSLA_Calls_90Days.ini, TSLA_Poots.ini |
| limit | Limit of random entries to display. Default shows all | 10 | True | None |
---

