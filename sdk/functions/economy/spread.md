# spread

## economy_investingcom_model.get_spread_matrix

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/investingcom_model.py#L223)

Description: Get spread matrix. [Source: Investing.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| countries | Union[str, List[str]] | Countries or group of countries. List of available countries is accessible through get_ycrv_countries(). | None | False |
| maturity | str | Maturity to get data. By default 10Y. | 10Y | False |
| change | bool | Flag to use 1 day change or not. By default False. | False | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Spread matrix. |

## Examples

