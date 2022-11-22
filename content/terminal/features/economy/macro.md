---
title: macro
description: OpenBB Terminal Function
---

# macro

Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP & GDP) and the underlying components, Treasury Yields (Y10YD & M3YD), Employment figures (URATE, EMP, AC0I0 and EMRATIO), Government components (e.g. GBAL & GREV), Consumer and Producer Indices (CPI & PPI) and a variety of other indicators. [Source: EconDB]

### Usage

```python
usage: macro [-p PARAMETERS] [-c COUNTRIES] [-t {,TPOP,TOYA,TUSD,TPGP,TNOR}] [--show {parameters,countries,transform}] [-s START_DATE] [-e END_DATE] [--convert CURRENCY]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| parameters | Abbreviation(s) of the Macro Economic data | CPI | True | None |
| countries | The country or countries you wish to show data for | united_states | True | None |
| transform | The transformation to apply to the data |  | True | , TPOP, TOYA, TUSD, TPGP, TNOR |
| show | Show parameters and what they represent using 'parameters' or countries and their currencies using 'countries' | None | True | parameters, countries, transform |
| start_date | The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31) | None | True | None |
| end_date | The end date of the data (format: YEAR-MONTH-DAY, i.e. 2021-06-20) | None | True | None |
| currency | Convert the currency of the chosen country to a specified currency. To find the currency symbols use '--show countries' | False | True | None |
---

## Examples

```python
2022 Mar 15, 07:20 (🦋) /economy/ $ macro -p CONF -c netherlands,germany,france -s 2005-01-01 -e 2022-01-01
```

![macro conf netherlands germany france](https://user-images.githubusercontent.com/46355364/159249787-a030cd2c-0b29-4522-a1a9-db0245d55d9f.png)

![oil production macro](https://user-images.githubusercontent.com/46355364/159251277-9381cc0a-7efe-41ce-af93-41d832103a1e.png)

![argentina gross domestic product in dollars](https://user-images.githubusercontent.com/46355364/159253210-c7135b12-b04a-49e4-8896-d03e4c25f520.png)

---

