---
title: news
description: Display recent posts from CryptoPanic news aggregator platform.
---
# news

## crypto_dd_cryptopanic_view.display_news

```python
def new) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L17)

Description: Display recent posts from CryptoPanic news aggregator platform.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to display | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),
es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| ascend | bool | Sort in ascending order. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

