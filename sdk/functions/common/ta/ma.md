# ma

## common_ta_overlap_view.view_ma

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_view.py#L31)

Description: Plots MA technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of prices | None | False |
| window | List[int] | Length of EMA window | None | False |
| offset | int | Offset variable | None | False |
| ma_type | str | Type of moving average.  Either "EMA" "ZLMA" or "SMA" | None | False |
| symbol | str | Ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

None

## Examples

