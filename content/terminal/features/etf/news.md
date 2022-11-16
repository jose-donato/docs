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
| limit | Limit of latest news being printed. | 5 | False | None |
| n_start_date | The starting date (format YYYY-MM-DD) to search articles from | 2022-11-09 12:39:12.352855 | False | None |
| n_oldest | Show oldest articles first | True | False | None |
| sources | Show news only from the sources specified (e.g bbc yahoo.com) | None | False | None |


