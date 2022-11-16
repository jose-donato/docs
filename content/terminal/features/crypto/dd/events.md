---
title: events
description: OpenBB Terminal Function
---

# Due Diligence

## events

### Description: 

Show information about most important coins events. Most of coins doesn't have any events. You can display only top N number of events with --limit parameter. You can sort data by id, date , date_to, name, description, is_conference --sort parameter and also with --reverse flag to sort ascending. You can use additional flag --urls to see urls for each event Displays: date , date_to, name, description, is_conference, link, proof_image_link

### Usage: 
```python
usage: events [-l LIMIT] [-s {date,date_to,name,description,is_conference}] [-r] [-u]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of records | 10 | True | None |
| sortby | Sort by given column. Default: date | date | True | date, date_to, name, description, is_conference |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
| urls | Flag to show urls. If you will use that flag you will see only date, name, link columns | False | True | None |


## Examples

```python

2022 Feb 15, 07:14 (✨) /crypto/dd/ $ events
                                                                                          All Events
┌────────────┬────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────┬───────────────┐
│ date       │ date_to    │ name                                                                                                   │ description                             │ is_conference │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2021-06-11 │ None       │ Ask El Salvador for advice: Cuba suspends dollar cash deposits in banks due to US sanctions            │                                         │ False         │
│ 00:00:00   │            │                                                                                                        │                                         │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2021-06-11 │ None       │ One of the Richest Bitcoin Whales in History Bought $138,000,000 in BTC Amid Market Turmoil – AronBoss │                                         │ False         │
│ 00:00:00   │            │                                                                                                        │                                         │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2021-05-10 │ None       │ Bitcoin’s upcoming Taproot upgrade and why it matters for the network                                  │                                         │ False         │
│ 00:00:00   │            │                                                                                                        │                                         │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2021-03-24 │ 2021-03-26 │ THE CRYPTO GATHERING                                                                                   │                                         │ False         │
│ 08:00:00   │ 23:00:00   │                                                                                                        │                                         │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2018-10-09 │ 2018-10-09 │ Blockchain & Bitcoin Conference Switzerland                                                            │ The second conference organized by      │ True          │
│ 09:00:00   │ 18:00:00   │                                                                                                        │ Smile-Expo company in Geneva, the       │               │
│            │            │                                                                                                        │ European fintech hub. The conference    │               │
│            │            │                                                                                                        │ will also feature the demozone.         │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2018-09-28 │ 2018-09-30 │ Super Conference                                                                                       │ KWIC, Kitchener - Waterloo, ON, Canada. │ True          │
│ 20:00:00   │ 16:00:00   │                                                                                                        │ 29 September, 2018                      │               │
├────────────┼────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────┼───────────────┤
│ 2018-07-10 │ None       │ SEC- ETF VanEck decision                                                                               │                                         │ False         │
│ 12:00:00   │            │                                                                                                        │                                         │               │
└────────────┴────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────┴───────────────┘

```

