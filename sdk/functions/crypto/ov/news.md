---
title: news
description: OpenBB SDK Function
---
# news

## crypto_ov_cryptopanic_model.get_news

```python
def news(limit: int, post_kind: str, filter_: Union[str, NoneType], region: str, source: Union[str, NoneType], symbol: Union[str, NoneType], sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_model.py#L156)

Description: Get recent posts from CryptoPanic news aggregator platform. [Source: https://cryptopanic.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to fetch | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),
es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | bool | Sort in ascend order. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from different sources filtered by provided parameters. |

## Examples




# VIEW

# news

## crypto_ov_cryptopanic_view.display_news

```python
def new) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L16)

Description: Display recent posts from CryptoPanic news aggregator platform.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number of news to display | None | False |
| post_kind | str | Filter by category of news. Available values: news or media. | None | False |
| filter_ | Optional[str] | Filter by kind of news. One from list: rising|hot|bullish|bearish|important|saved|lol | None | False |
| region | str | Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),
es (Español), fr (Français), it (Italiano), pt (Português), ru (Русский) | None | False |
| sortby | str | Key to sort by. | None | False |
| ascend | bool | Sort in ascending order. | None | False |
| links | bool | Show urls for news | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

