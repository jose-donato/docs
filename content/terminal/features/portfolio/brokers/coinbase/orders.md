---
title: orders
description: OpenBB Terminal Function
---

# Coinbase

## orders

### Description: 

List your current open orders

### Usage: 
```python
usage: orders [-l LIMIT] [-s {product_id,side,price,size,type,created_at,status}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit parameter. | 20 | False | None |
| sortby | Sort by given column. Default: created_at | created_at | False | product_id, side, price, size, type, created_at, status |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


