---
title: ch
description: OpenBB Terminal Function
---

# Overview

## ch

### Description: 

Display list of major crypto-related hacks [Source: https://rekt.news] Can be sorted by {Platform,Date,Amount [$],Audit,Slug,URL} with --sortby and reverse the display order with --reverse Show only N elements with --limit Accepts --slug or -s to check individual crypto hack (e.g., -s polynetwork-rekt)

### Usage: 
```python
usage: ch [-l LIMIT] [--sortby SORTBY [SORTBY ...]] [-r] [-s SLUG]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Display N items | 15 | False | None |
| sortby | Sort by given column. Default: Amount [$] | Amount [$] | False | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| slug | Slug to check crypto hack (e.g., polynetwork-rekt) | None | False | None |


## Examples

```python

2022 Feb 15, 08:16 (✨) /crypto/ov/ $ ch
                                                            Major Crypto Hacks
┌────────────────────────┬────────────┬────────────┬────────────────────────┬────────────────────┬───────────────────────────────────────┐
│ Platform               │ Date       │ Amount [$] │ Audit                  │ Slug               │ URL                                   │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Poly Network - REKT    │ 2021-08-10 │ 611 M      │ Unaudited              │ polynetwork-rekt   │ https://rekt.news/polynetwork-rekt/   │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Wormhole - REKT        │ 2022-02-02 │ 326 M      │ Neodyme                │ wormhole-rekt      │ https://rekt.news/wormhole-rekt/      │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ BitMart - REKT         │ 2021-12-04 │ 196 M      │ N/A                    │ bitmart-rekt       │ https://rekt.news/bitmart-rekt/       │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Compound - REKT        │ 2021-09-29 │ 147 M      │ Unaudited              │ compound-rekt      │ https://rekt.news/compound-rekt/      │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Vulcan Forged - REKT   │ 2021-12-13 │ 140 M      │ Unaudited              │ vulcan-forged-rekt │ https://rekt.news/vulcan-forged-rekt/ │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Cream Finance - REKT 2 │ 2021-10-27 │ 130 M      │ Unaudited              │ cream-rekt-2       │ https://rekt.news/cream-rekt-2/       │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Badger - REKT          │ 2021-12-02 │ 120 M      │ Unaudited              │ badger-rekt        │ https://rekt.news/badger-rekt/        │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Qubit Finance - REKT   │ 2022-01-28 │ 80 M       │ Unaudited              │ qubit-rekt         │ https://rekt.news/qubit-rekt/         │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Ascendex - REKT        │ 2021-12-12 │ 77.700 M   │ Unaudited              │ ascendex-rekt      │ https://rekt.news/ascendex-rekt/      │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ EasyFi - REKT          │ 2021-04-19 │ 59 M       │ Unaudited              │ easyfi-rekt        │ https://rekt.news/easyfi-rekt/        │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Uranium Finance - REKT │ 2021-04-28 │ 57.200 M   │ Unaudited              │ uranium-rekt       │ https://rekt.news/uranium-rekt/       │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ bZx - REKT             │ 2021-11-05 │ 55 M       │ Unaudited              │ bzx-rekt           │ https://rekt.news/bzx-rekt/           │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ PancakeBunny - REKT    │ 2021-05-19 │ 45 M       │ Unaudited              │ pancakebunny-rekt  │ https://rekt.news/pancakebunny-rekt/  │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Kucoin - REKT          │ 2020-09-29 │ 45 M       │ Internal audit         │ epic-hack-homie    │ https://rekt.news/epic-hack-homie/    │
├────────────────────────┼────────────┼────────────┼────────────────────────┼────────────────────┼───────────────────────────────────────┤
│ Alpha Finance - REKT   │ 2021-02-13 │ 37.500 M   │ Quantstamp, Peckshield │ alpha-finance-rekt │ https://rekt.news/alpha-finance-rekt/ │
└────────────────────────┴────────────┴────────────┴────────────────────────┴────────────────────┴───────────────────────────────────────┘

```

