---
title: bigmac
description: Display Big Mac Index for given countries
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

