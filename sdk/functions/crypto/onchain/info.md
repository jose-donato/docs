---
title: info
description: OpenBB SDK Function
---
# info

## crypto_onchain_ethplorer_model.get_token_info

```python
def info(address: Any) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L372)

Description: Get info about ERC20 token. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | DataFrame with information about provided ERC20 token. |

## Examples




# VIEW

# info

## crypto_onchain_ethplorer_view.display_token_info

```python
def inf) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L205)

Description: Display info about ERC20 token. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |
| social | bool | Flag to display social media links | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

