# news

## common_newsapi_model.get_news

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L17)

Description: Get news for a given term. [Source: NewsAPI]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | term to search on the news articles | None | False |
| start_date | str | date to start searching articles from formatted YYYY-MM-DD | None | False |
| show_newest | bool | flag to show newest articles first | None | False |
| sources | str | sources to exclusively show news from (comma separated) | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| tables | List[Tuple] | List of tuples containing news df in first index and dict containing title of news df | None | False |

None

## Examples

