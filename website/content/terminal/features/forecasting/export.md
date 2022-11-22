---
title: export
description: OpenBB Terminal Function
---

# export

Export dataset to Excel

### Usage

```python
usage: export [-t {xlsx,csv}]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| type | The file type you wish to export to | xlsx | True | xlsx, csv |
---

## Examples

```python
(🦋) /forecast/ $ load aapl

(🦋) /forecast/ $ ema aapl
Successfully added 'EMA_10' to 'aapl' dataset

(🦋) /forecast/ $ export aapl
Saved file: .../OpenBBTerminal/exports/forecast/aapl_20220711_151219.xlsx
```

---

