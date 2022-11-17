---
title: Set API Keys
---

### **API Keys**

API keys can be managed directly from the SDK environment. If there is already a Terminal installation configured with API keys, they will be recognized by the SDK. Their status can be verified with the line of code below.

```python
obb.keys.mykeys(show = True)
```

Removing `show = True` from the syntax will hide the values for the keys, as shown in the screenshot below.

| API                       | Key     |
|:--------------------------|:--------|
| BINANCE_KEY               | ******* |
| BINANCE_SECRET            | ******* |
| BITQUERY_KEY              | ******* |
| CMC_KEY                   | ******* |
| COINBASE_KEY              | ******* |
| COINBASE_PASS_PHRASE      | ******* |
| COINBASE_SECRET           | ******* |
| COINGLASS_KEY             | ******* |
| CRYPTO_PANIC_KEY          | ******* |
| EODHD_KEY                 | ******* |
| ETHPLORER_KEY             | ******* |
...continued

Individual keys are entered like this example:

```python
obb.keys.fred(
    key = 'replace_me',
    persist = True,
)
```

In cases where API credentials must be passed to another process, use the following import statement:

```python
from openbb_terminal import config_terminal as cfg
```

Values can then be passed to a request URL as a variable, `f"{cfg.API_KEY_QUANDL}"`

![Quandl Get Request](https://user-images.githubusercontent.com/85772166/201581632-b02bcb6b-b54c-4d8c-814a-7adf69c6db60.png "Quandl Get Request")

The code block below will authorize Quandl to request data from Nasdaq Data Link. The series in the example is for the historical price of gold.

```python
import quandl
from openbb_terminal import config_terminal as cfg

gold = quandl.get("LBMA/GOLD", collapse="monthly", transform="", index_col=0, order="desc", parse_dates=True, authtoken=f"{cfg.API_KEY_QUANDL}")
```

| Date                |   USD (AM) |   USD (PM) |   GBP (AM) |   GBP (PM) |   EURO (AM) |   EURO (PM) |
|:--------------------|-----------:|-----------:|-----------:|-----------:|------------:|------------:|
| 2022-11-30 00:00:00 |    1757.35 |    1768.9  |    1491.46 |    1506.57 |     1704.98 |     1714.06 |
| 2022-10-31 00:00:00 |    1638.85 |    1639    |    1419.74 |    1425.27 |     1649.5  |     1656.87 |
| 2022-09-30 00:00:00 |    1672.75 |    1671.75 |    1495.94 |    1502.4  |     1703.7  |     1710.53 |
| 2022-08-31 00:00:00 |    1712.4  |    1715.9  |    1472.15 |    1478.08 |     1713.6  |     1715.21 |
| 2022-07-31 00:00:00 |    1758.9  |    1753.4  |    1447.4  |    1451.64 |     1724.07 |     1725.7  |
...continued

Refer to the [Keys Guide](https://openbb-finance.github.io/OpenBBTerminal/SDK/keys/) for more information about managing API keys.
