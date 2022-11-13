---
title: newsletters
description: OpenBB SDK Function
---
# newsletters

## crypto_defi_substack_model.get_newsletters

```python
def newsletter) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_model.py#L51)

Description: Scrape all substack newsletters from url list.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from most popular DeFi related newsletters. |

## Examples




# VIEW

# newsletters

## crypto_defi_substack_view.display_newsletters

```python
def newsletters(limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_view.py#L15)

Description: Display DeFi related substack newsletters.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

