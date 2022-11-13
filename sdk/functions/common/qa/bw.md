# bw

## common_qa_view.display_bw

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L257)

Description: Show box and whisker plots

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Name of dataset | None | False |
| data | pd.DataFrame | Dataframe to look at | None | False |
| target | str | Data column to look at | None | False |
| yearly | bool | Flag to indicate yearly accumulation | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

None

## Examples

