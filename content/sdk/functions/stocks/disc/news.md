---
title: news
description: OpenBB SDK Function
---

# news

Gets news. [Source: SeekingAlpha]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/seeking_alpha_model.py#L199)

```python
def get_news(news_type: str, limit: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| news_type | str | From: Top-News, On-The-Move, Market-Pulse, Notable-Calls, Buybacks, Commodities, Crypto, Issuance, Global,<br/>Guidance, IPOs, SPACs, Politics, M-A, Consumer, Energy, Financials, Healthcare, MLPs, REITs, Technology | None | False |
| limit | int | Number of news to display | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| List[dict] | List of dict news |

---

## Examples

---

