---
title: rm
description: OpenBB SDK Function
---
# rm

## crypto_dd_messari_model.get_roadmap

```python
def r) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L224)

Description: Returns coin roadmap

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check roadmap | None | False |
| ascend | bool | reverse order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | roadmap |

## Examples




# VIEW

# rm

## crypto_dd_messari_view.display_roadmap

```python
def r) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L271)

Description: Display coin roadmap

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check roadmap | None | False |
| ascend | bool | reverse order | None | False |
| limit | int | number to show | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

