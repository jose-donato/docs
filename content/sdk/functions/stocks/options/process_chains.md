---
title: process_chains
description: OpenBB SDK Function
---
# process_chains

## stocks_options_tradier_model.process_chains

```python
def process_chains(response: requests.models.Response) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/tradier_model.py#L190)

Description: Function to take in the requests.get and return a DataFrame

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| response | requests.models.Response | This is the response from tradier api. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with all available options |

## Examples

