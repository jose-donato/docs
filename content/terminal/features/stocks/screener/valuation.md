---
title: valuation
description: OpenBB Terminal Function
---

# valuation

Prints valuation data of the companies that meet the pre-set filtering.

### Usage

```python
usage: valuation [-p Desired preset.] [-l LIMIT] [-r] [-s SORT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| preset | Filter presets | top_gainers | True | 5pct_above_low, analyst_strong_buy, break_out_stocks, buffett_like, bull_runs_over_10pct, channel_up_and_low_debt_and_sma_50and200, cheap_bottom_dividend, cheap_dividend, cheap_oversold, continued_momentum_scan, death_cross, golden_cross, golden_cross_penny, growth_stocks, heavy_inst_ins, high_vol_and_low_debt, modified_dreman, modified_neff, news_scanner, oversold, oversold_under_3dol, oversold_under_5dol, potential_reversals, recent_growth_and_support, rosenwald, rosenwald_gtfo, sexy_year, short_squeeze_scan, simplistic_momentum_scanner_under_7dol, stocks_strong_support_levels, template, top_performers_all, top_performers_healthcare, top_performers_tech, undervalue, under_15dol_stocks, unusual_volume, value_stocks, weak_support_and_top_performers, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse |
| limit | Limit of stocks to print | 10 | True | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
| sort | Sort elements of the table. | Ticker | True | ticker, marketcap, p/e, fwdp/e, peg, p/s, p/b, p/c, p/fcf, epsthisy, epsnexty, epspast5y, epsnext5y, salespast5y, price, change, volume |
---

