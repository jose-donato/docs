---
title: events
description: OpenBB Terminal Function
---

# events

Economic calendar. If no start or end dates, default is the current day high importance events.

### Usage

```python
usage: events [-c COUNTRY] [-s START_DATE] [-e END_DATE] [-d SPEC_DATE] [-i {high,medium,low,all}] [--categories {employment,credit,balance,economic_activity,central_banks,bonds,inflation,confidence_index}]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| country | Display calendar for specific country. |  | True | None |
| start_date | The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31) | 2022-11-18 | True | None |
| end_date | The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31) | 2022-11-18 | True | None |
| spec_date | Get a specific date for events. Overrides start and end dates. | None | True | None |
| importance | Event importance classified as high, medium, low or all. | None | True | high, medium, low, all |
| category | [INVESTING source only] Event category. | None | True | employment, credit, balance, economic_activity, central_banks, bonds, inflation, confidence_index |
---

## Examples

```python
2022 Oct 20, 15:19 (🦋) /economy/ $ events -c united_kingdom,spain -s 2022-10-20 -e 2022-11-05 -l 15

                                                Economic Calendar
┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ Time (GMT) ┃ Country        ┃ Event                              ┃ actual ┃ consensus ┃ previous ┃ Date       ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 04:40      │ Spain          │ Spanish 3-Year Bonos Auction       │ 2.663% │ -         │ 1.416%   │ 2022-10-20 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 04:40      │ Spain          │ Spanish 7-Year Obligacion Auction  │ 3.247% │ -         │ 1.550%   │ 2022-10-20 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 19:01      │ United Kingdom │ GfK Consumer Confidence            │ -      │ -52       │ -49      │ 2022-10-20 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Core Retail Sales                  │ -      │ -0.3%     │ -1.6%    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Core Retail Sales                  │ -      │ -4.1%     │ -5.0%    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Public Sector Net Borrowing        │ -      │ 12.30B    │ 11.06B   │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Public Sector Net Cash Requirement │ -      │ -         │ 5.321B   │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Retail Sales                       │ -      │ -5.0%     │ -5.4%    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 02:00      │ United Kingdom │ Retail Sales                       │ -      │ -0.5%     │ -1.6%    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 04:30      │ United Kingdom │ BoE Consumer Credit                │ -      │ -         │ 1.077B   │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 04:30      │ United Kingdom │ M4 Money Supply                    │ -      │ -         │ -0.2%    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 04:30      │ United Kingdom │ Mortgage Approvals                 │ -      │ 62.00K    │ 74.34K   │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 04:30      │ United Kingdom │ Mortgage Lending                   │ -      │ 4.90B     │ 6.14B    │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 15:30      │ United Kingdom │ CFTC GBP speculative net positions │ -      │ -         │ -39.2K   │ 2022-10-21 │
├────────────┼────────────────┼────────────────────────────────────┼────────┼───────────┼──────────┼────────────┤
│ 14:00      │ United Kingdom │ BoE MPC Member Mann                │ -      │ -         │ -        │ 2022-10-22 │
└────────────┴────────────────┴────────────────────────────────────┴────────┴───────────┴──────────┴────────────┘
```

---

