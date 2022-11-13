# calc_delta

## stocks_options_hedge_model.calc_delta

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/hedge/hedge_model.py#L183)

Description: The first-order partial-derivative with respect to the underlying asset of the Black-Scholes

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| asset_price | int | The price. | None | False |
| asset_volatility | float | The implied volatility. | None | False |
| strike_price | float | The strike price. | None | False |
| time_to_expiration | float | The amount of days until expiration. Use annual notation thus a month would be 30 / 360. | None | False |
| risk_free_rate | float | The risk free rate. | None | False |
| sign | int | Whether you have a long (1) or short (-1) position | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | Returns the value for the delta. |

## Examples

