# hist_tr

## stocks_options_tradier_model.get_historical_options

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L43)

Description: Gets historical option pricing.  This inputs either ticker, expiration, strike or the OCC chain ID and processes

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration date | None | False |
| strike | int | Option strike price | None | False |
| put | bool | Is this a put option? | None | False |
| chain_id | Optional[str] | OCC chain ID | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical option prices |

## Examples

