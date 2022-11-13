# tob

## stocks_cboe_model.get_top_of_book

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/cboe_model.py#L12)

Description: Get top of book bid and ask for ticker on exchange [CBOE.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get | None | False |
| exchange | str | Exchange to look at.  Can be `BZX`,`EDGX`, `BYX`, `EDGA` | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DatatFrame | Dataframe of Bids |

## Examples

