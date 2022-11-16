---
title: news
description: OpenBB Terminal Function
---

# Overview

## news

### Description: 

Display recent news from CryptoPanic aggregator platform. [Source: https://cryptopanic.com/]

### Usage: 
```python
usage: news [-l LIMIT] [-k {news,media}] [--filter {rising,hot,bullish,bearish,important,saved,lol}] [-r {en,de,es,fr,nl,it,pt,ru}] [-s {published_at,domain,title,negative_votes,positive_votes}] [--reverse] [-u]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 20 | False | None |
| kind | Filter by category of news. Available values: news or media. | news | False | news, media |
| filter | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False | rising, hot, bullish, bearish, important, saved, lol |
| region | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch), es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | en | False | en, de, es, fr, nl, it, pt, ru |
| sortby | Sort by given column. Default: published_at | published_at | False | published_at, domain, title, negative_votes, positive_votes |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| urls | Flag to show urls column. | None | False | None |


