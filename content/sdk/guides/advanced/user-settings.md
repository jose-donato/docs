---
title: User Settings
---

### **OpenBBUserData Settings and Folder**

The OpenBB SDK shares settings, keys, and the `OpenBBUserData` folder with the Terminal. Portfolio files, screener presets, and Matplotlib style sheets are all shared resources. This folder will be created after the first installation and it is read by subsequent installations. The default location for it is in the root of the operating system user account folder. For functions where files are read from these locations, like screeners, it is not neccessary to include the full path. The code block below returns results from the stock screener, using the preset, `unusual_options`.

```python
results = []

results = openbb.stocks.screener.screener_data(
    preset_loaded = 'unusual_volume.ini',
    data_type = 'technical',
    limit = 5,
)
results = results.sort_values(ascending = False, by = ['Volume'])
results.head(5)
```

|    | Ticker   |   Beta |   ATR |   SMA20 |   SMA50 |   SMA200 |   52W High |   52W Low |   RSI |   Price |   Change |   from Open |     Gap |      Volume |
|---:|:---------|-------:|------:|--------:|--------:|---------:|-----------:|----------:|------:|--------:|---------:|------------:|--------:|------------:|
| 48 | CUEN     |   0.61 |  0.04 | -0.0367 | -0.2802 |  -0.5626 |    -0.8793 |    0.1505 | 39.65 |    0.35 |   0.0494 |     -0.2249 |  0.3539 | 1.15487e+07 |
| 16 | PDSB     |   2.54 |  0.55 |  0.6788 |  1.0466 |   0.7899 |    -0.248  |    2.0104 | 83.52 |    8.7  |   0.2323 |      0.1951 |  0.0312 | 6.32774e+06 |
| 32 | IBTE     | nan    |  0.05 |  0.0025 | -0.0015 |  -0.0214 |    -0.0661 |    0.0076 | 53.72 |   23.89 |   0.0008 |      0.0004 |  0.0004 | 5.85758e+06 |
| 11 | PTLO     | nan    |  1.28 |  0.033  |  0.038  |   0.0368 |    -0.6097 |    0.5187 | 52.02 |   22.53 |  -0.0941 |     -0.004  | -0.0905 | 3.96768e+06 |
| 65 | ABMD     |   1.32 | 10.78 |  0.1822 |  0.3316 |   0.3296 |    -0.0201 |    0.7027 | 78.79 |  374.32 |   0.0006 |     -0.0006 |  0.0011 | 3.50787e+06 |
