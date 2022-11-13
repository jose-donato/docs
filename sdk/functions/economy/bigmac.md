---
title: bigmac
description: OpenBB SDK Function
---
# bigmac

## economy_nasdaq_model.get_big_mac_indices

```python
def bigma) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L165)

Description: Display Big Mac Index for given countries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country_codes | List[str] | List of country codes (ISO-3 letter country code). Codes available through economy.country_codes(). | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with Big Mac indices converted to USD equivalent. |

## Examples




# VIEW

# bigmac

## economy_nasdaq_view.display_big_mac_index

```python
def bigma) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L58)

Description: Display Big Mac Index for given countries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country_codes | List[str] | List of country codes (ISO-3 letter country code). Codes available through economy.country_codes(). | None | False |
| raw | bool | Flag to display raw data, by default False | False | True |
| export | str | Format data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

