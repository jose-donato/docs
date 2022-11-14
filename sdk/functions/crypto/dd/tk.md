---
title: tk
description: OpenBB SDK Function
---
# tk

## crypto_dd_messari_model.get_tokenomics

```python
def t) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L271)

Description: Returns coin tokenomics

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check tokenomics | None | False |
| coingecko_id | str | ID from coingecko | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric Value tokenomics |

## Examples




# VIEW

# tk

## crypto_dd_messari_view.display_tokenomics

```python
def t) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L373)

Description: Display coin tokenomics

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check tokenomics | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

