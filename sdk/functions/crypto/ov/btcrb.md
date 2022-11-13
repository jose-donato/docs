---
title: btcrb
description: OpenBB SDK Function
---
# btcrb

## crypto_ov_glassnode_model.get_btc_rainbow

```python
def btcrb(start_date: str, end_date: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/glassnode_model.py#L16)

Description: Get bitcoin price data

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

None

## Examples




# VIEW

# btcrb

## crypto_ov_glassnode_view.display_btc_rainbow

```python
def btcr) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L28)

Description: Displays bitcoin rainbow chart

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | int | Initial date, format YYYY-MM-DD | None | False |
| end_date | int | Final date, format YYYY-MM-DD | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples
