---
title: combine
description: OpenBB Terminal Function
---

# combine

The columns you want to add to a dataset. The first argument is the dataset to add columns inand the remaining could be: datasetX.column2,datasetY.column3

### Usage

```python
usage: combine [-d {}] [-c COLUMNS]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| dataset | Dataset to add columns to | None | True | None |
| columns | The columns we want to add dataset.column,dataset.column2 | None | True | None |
---

## Examples

```python
2022 May 31, 04:54 (🦋) /econometrics/ $ load nile

2022 May 31, 04:54 (🦋) /econometrics/ $ load nile -a nile_2

2022 May 31, 04:54 (🦋) /econometrics/ $ combine nile -c nile_2.volume

2022 May 31, 04:55 (🦋) /econometrics/ $ show nile

  Dataset nile | Showing 10 of 100 rows  
┏━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃   ┃ year    ┃ volume  ┃ nile_2_volume ┃
┡━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ 0 │ 1871.00 │ 1120.00 │ 1120.00       │
├───┼─────────┼─────────┼───────────────┤
│ 1 │ 1872.00 │ 1160.00 │ 1160.00       │
├───┼─────────┼─────────┼───────────────┤
│ 2 │ 1873.00 │ 963.00  │ 963.00        │
├───┼─────────┼─────────┼───────────────┤
│ 3 │ 1874.00 │ 1210.00 │ 1210.00       │
├───┼─────────┼─────────┼───────────────┤
│ 4 │ 1875.00 │ 1160.00 │ 1160.00       │
├───┼─────────┼─────────┼───────────────┤
│ 5 │ 1876.00 │ 1160.00 │ 1160.00       │
├───┼─────────┼─────────┼───────────────┤
│ 6 │ 1877.00 │ 813.00  │ 813.00        │
├───┼─────────┼─────────┼───────────────┤
│ 7 │ 1878.00 │ 1230.00 │ 1230.00       │
├───┼─────────┼─────────┼───────────────┤
│ 8 │ 1879.00 │ 1370.00 │ 1370.00       │
├───┼─────────┼─────────┼───────────────┤
│ 9 │ 1880.00 │ 1140.00 │ 1140.00       │
└───┴─────────┴─────────┴───────────────┘
```

---

