---
title: dex
description: OpenBB Terminal Function
---

# dex

Shows top decentralized exchanges [Source: https://dappradar.com/] Accepts --sort {Name,Daily Users,Daily Volume [$]} to sort by column

### Usage

```python
usage: dex [-l LIMIT] [-s SORTBY [SORTBY ...]]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number of records to display | 15 | True | None |
| sortby | Sort by given column. Default: Daily Volume [$] | Daily Volume [$] | True | None |
---

## Examples

```python
2022 Feb 15, 06:52 (🦋) /crypto/disc/ $ dex
           Top Decentralized Exchanges
┌───────────────┬─────────────┬──────────────────┐
│ Name          │ Daily Users │ Daily Volume [$] │
├───────────────┼─────────────┼──────────────────┤
│ Splinterlands │ 305.1K      │ 8K               │
├───────────────┼─────────────┼──────────────────┤
│ PancakeSwap   │ 289.3K      │ 223.7M           │
├───────────────┼─────────────┼──────────────────┤
│ Alien Worlds  │ 235.6K      │ 759.2K           │
├───────────────┼─────────────┼──────────────────┤
│ Farmers World │ 111.7K      │ 2.3K             │
├───────────────┼─────────────┼──────────────────┤
│ AtomicAssets  │ 108.9K      │ 226.3K           │
├───────────────┼─────────────┼──────────────────┤
│ Axie Infinity │ 90.9K       │ 11.6M            │
├───────────────┼─────────────┼──────────────────┤
│ Upland        │ 63.3K       │ 0                │
├───────────────┼─────────────┼──────────────────┤
│ OpenSea       │ 54K         │ 200M             │
├───────────────┼─────────────┼──────────────────┤
│ Katana        │ 45.9K       │ 92.7M            │
├───────────────┼─────────────┼──────────────────┤
│ Magic Eden    │ 40.2K       │ 18.5M            │
└───────────────┴─────────────┴──────────────────┘
```

---

