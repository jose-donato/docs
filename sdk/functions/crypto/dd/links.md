---
title: links
description: OpenBB SDK Function
---
# links

## crypto_dd_messari_model.get_links

```python
def link) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L185)

Description: Returns asset's links

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check links | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | asset links |

## Examples




# VIEW

# links

## crypto_dd_messari_view.display_links

```python
def link) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L236)

Description: Display coin links

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check links | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

