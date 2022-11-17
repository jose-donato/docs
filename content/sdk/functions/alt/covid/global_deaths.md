---
title: global_deaths
description: OpenBB SDK Function
---

# global_deaths

Get historical deaths for given country.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L73)]

```python
def get_global_deaths(country: str) -> DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to search for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical deaths |

