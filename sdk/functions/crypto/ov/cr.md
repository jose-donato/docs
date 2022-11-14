---
title: cr
description: OpenBB SDK Function
---
# cr

## crypto_ov_loanscan_model.get_rates

```python
def cr(rate_type: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/loanscan_model.py#L266)

Description: Returns crypto {borrow,supply} interest rates for cryptocurrencies across several platforms

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| rate_type | str | Interest rate type: {borrow, supply}. Default: supply | supply | False |

## Returns

| Type | Description |
| ---- | ----------- |
| crypto interest rates per platform | None |

## Examples




# VIEW

# cr

## crypto_ov_loanscan_view.display_crypto_rates

```python
def cr(symbols: str, platforms: str, rate_type: str, limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/loanscan_view.py#L23)

Description: Displays crypto {borrow,supply} interest rates for cryptocurrencies across several platforms

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| rate_type | str | Interest rate type: {borrow, supply}. Default: supply | supply | False |
| symbols | str | Crypto separated by commas. Default: BTC,ETH,USDT,USDC | BTC | False |
| platforms | str | Platforms separated by commas. Default: BlockFi,Ledn,SwissBorg,Youhodler | BlockFi | False |
| limit | int | Number of records to show | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

