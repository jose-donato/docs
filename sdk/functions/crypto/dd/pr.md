---
title: pr
description: OpenBB SDK Function
---
# pr

## crypto_dd_pycoingecko_model.get_coin_potential_returns

```python
def pr(main_coin: str, to_symbol: Union[str, NoneType], limit: Union[int, NoneType], price: Union[int, NoneType]) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L62)

Description: Fetch data to calculate potential returns of a certain coin. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| main_coin | str | Coin loaded to check potential returns for (e.g., algorand) | None | False |
| to_symbol | str | None | Coin to compare main_coin with (e.g., bitcoin) | None | False |
| limit | int | None | Number of coins with highest market cap to compare main_coin with (e.g., 5) | None | False |
| price | None | Target price of main_coin to check potential returns (e.g., 5) | None | None |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Potential returns data
Columns: Coin, Current Price, Target Coin, Potential Price, Potential Market Cap ($), Change (%) |

## Examples




# VIEW

# pr

## crypto_dd_pycoingecko_view.display_coin_potential_returns

```python
def pr(to_symbol: str, from_symbol: Union[str, NoneType], limit: Union[int, NoneType], price: Union[int, NoneType], export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_view.py#L19)

Description: Displays potential returns of a certain coin. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | Coin loaded to check potential returns for (e.g., algorand) | None | False |
| from_symbol | str | None | Coin to compare main_coin with (e.g., bitcoin) | None | False |
| limit | int | None | Number of coins with highest market cap to compare main_coin with (e.g., 5) | None | False |
| price | None | Target price of main_coin to check potential returns (e.g., 5) | None | None |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples
