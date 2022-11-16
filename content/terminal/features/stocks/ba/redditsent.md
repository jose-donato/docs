---
title: redditsent
description: OpenBB Terminal Function
---

# Behavioural Analysis

## redditsent

### Description: 

Determine general Reddit sentiment about a ticker. [Source: Reddit]

### Usage: 
```python
usage: redditsent [-s {relevance,hot,top,new,comments}] [-c COMPANY] [--subreddits SUBREDDITS] [-l LIMIT] [-t {hour,day,week,month,year,all}] [--full] [-g] [-d]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| sort | search sorting type | relevance | False | relevance, hot, top, new, comments |
| company | explicit name of company to search for, will override ticker symbol | None | False | None |
| subreddits | comma-separated list of subreddits to search | all | False | None |
| limit | how many posts to gather from each subreddit | 10 | False | None |
| time | time period to get posts from -- all, year, month, week, or day; defaults to week | week | False | hour, day, week, month, year, all |
| full_search | enable comprehensive search | None | False | None |
| graphic | display graphic | True | False | None |
| display | Print table of sentiment values | None | False | None |


