---
title: news
description: OpenBB Terminal Function
---

# news

latest news of the company

### Usage

```python
usage: news [-d N_START_DATE] [-o] [-s SOURCES]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_start_date | The starting date (format YYYY-MM-DD) to search articles from | datetime.now() - timedelta(days=365) | True | None |
| n_oldest | Show oldest articles first | True | True | None |
| sources | Show news only from the sources specified (e.g bloomberg,reuters) |  | True | None |
---

## Examples

```python
2022 Jul 04, 16:54 (🦋) /stocks/ $ news
543 news articles for Apple+Inc. were found since 2022-06-27


                         Three ways to patch your thinking about open-source software security
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Content                                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2022-07-04 20:11:03                                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ What comes to mind when you hear “open source?” Is it a community? Better-quality software? A technology advantage  │
│ that helps companies scale quickly? If so, congratulations. You understand the value developing with open-source    │
│ software can bring to a business…                                                                                    │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ https://siliconangle.com/2022/07/04/three-ways-patch-thinking-open-source-software-security/                        │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘


                            HUUUGE, INC.: Informacja o kwartalnych przychodach ze sprzedaży
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Content                                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2022-07-04 18:55:11                                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Spis treści:1. RAPORT BIEŻĄCY2. MESSAGE (ENGLISH VERSION)3. INFORMACJE O PODMIOCIE4. PODPISY OSÓB REPREZENTUJĄCYCH  │
│ SPÓŁKĘ KOMISJA NADZORU FINANSOWEGO html head /head bodyfont face='Times New...                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ https://www.bankier.pl/wiadomosc/HUUUGE-INC-Informacja-o-kwartalnych-przychodach-ze-sprzedazy-8369875.html          │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘


                              5 Carpooling Apps to Help You Save Money on Transportation
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Content                                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2022-07-04 16:00:22                                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ When we were kids, our parents told us not to get into cars with strangers, but that’s before we all had            │
│ smartphones in our pockets and the price of gas skyrocketed. Now, if you need to get around, carpooling is a way to │
│ save at the gas pump — or the electric…                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ https://www.thepennyhoarder.com/save-money/carpool-apps/                                                            │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

