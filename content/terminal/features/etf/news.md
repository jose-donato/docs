---
title: news
description: OpenBB Terminal Function
---

# ETFs

## news

### Description: 

Prints latest news about ETF, including date, title and web link. [Source: News API]

### Usage: 
```python
usage: news [-l LIMIT] [-d N_START_DATE] [-o] [-s SOURCES]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of latest news being printed. | 5 | True | None |
| n_start_date | The starting date (format YYYY-MM-DD) to search articles from | 2022-11-09 19:58:42.104116 | True | None |
| n_oldest | Show oldest articles first | True | True | None |
| sources | Show news only from the sources specified (e.g bbc yahoo.com) |  | True | None |


