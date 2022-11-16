---
title: pir
description: OpenBB Terminal Function
---

# ETFs

## pir

### Description: 

Create passive investor ETF excel report which contains most of the important metrics about an ETF obtained from Yahoo Finnace. You are able to input any ETF ticker you like within the command to create am extensive report

### Usage: 
```python
usage: pir [-e NAMES] [--filename FILENAME] [--folder FOLDER]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| names | Symbols to create a report for (e.g. pir ARKW ARKQ QQQ VOO) | None | False | None |
| filename | Filename of the excel ETF report | ETF_report_20221116_123912 | False | None |
| folder | Folder where the excel ETF report will be saved | C:\Users\teh_coderer\OpenBBUserData\exports | False | None |


