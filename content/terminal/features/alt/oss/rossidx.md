---
title: rossidx
description: OpenBB Terminal Function
---

# Open Source Software

## rossidx

### Description: 

Display list of startups from ross index [Source: https://runacap.com/] Use --chart to display chart and -t {stars,forks} to set chart type

### Usage: 
```python
usage: rossidx [-s SORTBY [SORTBY ...]] [-r] [-c] [-g] [-t {stars,forks}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| sortby | Sort startups by column | Stars AGR [%] | False | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| show_chart | Flag to show chart | None | False | None |
| show_growth | Flag to show growth chart | None | False | None |
| chart_type | Chart type: {stars, forks} | stars | False | stars, forks |


