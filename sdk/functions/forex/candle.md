# candle

## forex_helpers.display_candle

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/forex_helper.py#L226)

Description: Show candle plot for fx data.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Loaded fx historical data | None | False |
| to_symbol | str | To forex symbol | None | False |
| from_symbol | str | From forex symbol | None | False |
| ma | Optional[Iterable[int]] | Moving averages | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | False |

None

## Examples

