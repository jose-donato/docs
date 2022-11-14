---
title: top
description: OpenBB SDK Function
---
# top

## crypto_onchain_ethplorer_model.get_top_tokens

```python
def top(sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L267)

Description: Get top 50 tokens. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with list of top 50 tokens. |

## Examples




# VIEW

# top

## crypto_onchain_ethplorer_view.display_top_tokens

```python
def to) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L69)

Description: Display top ERC20 tokens [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Limit of transactions. Maximum 100 | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | str | Sort in descending order. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

