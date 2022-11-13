---
title: dtvl
description: Displays historical TVL of different dApps
---
# dtvl

## crypto_defi_llama_view.display_historical_tvl

```python
def dtvl(dapps: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L130)

Description: Displays historical TVL of different dApps

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dapps | str | dApps to search historical TVL. Should be split by , e.g.: anchor,sushiswap,pancakeswap | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

