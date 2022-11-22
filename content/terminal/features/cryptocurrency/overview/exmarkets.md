---
title: exmarkets
description: OpenBB Terminal Function
---

# exmarkets

Get all exchange markets found for given exchange You can display only N number of records with --limit parameter. You can sort data by pair, base_currency_name, quote_currency_name, market_url, category, reported_volume_24h_share, trust_score --sortby parameter and also with --reverse flag to sort ascending. You can use additional flag --urls to see urls for each market Displays: exchange_id, pair, base_currency_name, quote_currency_name, market_url, category, reported_volume_24h_share, trust_score,

### Usage

```python
usage: exmarkets [-e EXCHANGE] [-l LIMIT] [-s {pair,base_currency_name,quote_currency_name,category,reported_volume_24h_share,trust_score,market_url}] [-r] [-u]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| exchange | Identifier of exchange e.g for Binance Exchange - binance | binance | True | None |
| limit | display N number records | 10 | True | None |
| sortby | Sort by given column. Default: reported_volume_24h_share | reported_volume_24h_share | True | pair, base_currency_name, quote_currency_name, category, reported_volume_24h_share, trust_score, market_url |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
| urls | Flag to show urls. If you will use that flag you will see only: exchange, pair, trust_score, market_url columns | False | True | None |
---

## Examples

```python
2022 Feb 15, 08:18 (🦋) /crypto/ov/ $ exmarkets
                                                     Exchange Markets
┌─────────────┬───────────┬────────────────────┬─────────────────────┬──────────┬───────────────────────────┬─────────────┐
│ exchange_id │ pair      │ base_currency_name │ quote_currency_name │ category │ reported_volume_24h_share │ trust_score │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ BTC/USDT  │ Bitcoin            │ Tether              │ Spot     │ 14.25                     │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ ETH/USDT  │ Ethereum           │ Tether              │ Spot     │ 11.87                     │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ BTC/BUSD  │ Bitcoin            │ Binance USD         │ Spot     │ 4.44                      │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ BNB/USDT  │ Binance Coin       │ Tether              │ Spot     │ 3.58                      │ medium      │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ BUSD/USDT │ Binance USD        │ Tether              │ Spot     │ 3.54                      │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ ETH/BUSD  │ Ethereum           │ Binance USD         │ Spot     │ 2.97                      │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ SLP/USDT  │ Smooth Love Potion │ Tether              │ Spot     │ 2.86                      │ medium      │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ SHIB/USDT │ Shiba Inu          │ Tether              │ Spot     │ 2.41                      │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ XRP/USDT  │ XRP                │ Tether              │ Spot     │ 2.01                      │ high        │
├─────────────┼───────────┼────────────────────┼─────────────────────┼──────────┼───────────────────────────┼─────────────┤
│ binance     │ SOL/USDT  │ Solana             │ Tether              │ Spot     │ 1.95                      │ high        │
└─────────────┴───────────┴────────────────────┴─────────────────────┴──────────┴───────────────────────────┴─────────────┘
```

---

