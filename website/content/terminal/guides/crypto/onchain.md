---
title: Onchain
keywords: ["cryptocurrency", "onchain", "hashrate", "erc20", "dexes", "ethereum"]
excerpt: "An Introduction to Cryptocurrency Onchain, within the Cryptocurrency Menu,
with a brief overview of the features."
geekdocCollapseSection: true
---

The Cryptocurrency Onchain menu provides access to features that determine market sentiment by leveraging data from a blockchain ledger. This can be, among other things, blockchain hashrates (<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/hr/" target="_blank">hr</a>), confirmed transactions (<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/btcct/" target="_blank">btcct</a>) and top traded crypto pairs (<a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/ttcp/" target="_blank">ttcp</a>).

### How to use

The Cryptocurrency Onchain menu is called upon by typing `onchain`, while inside the `crypto` menu, which opens the following menu:

![Cryptocurrency Onchain Menu](https://user-images.githubusercontent.com/46355364/178532254-8f4ef039-fab5-4ac5-afbf-584f8ce711c4.png)

Alternatively, you can also type `/crypto/onchain`. Within the Cryptocurrency Onchain menu you can find features examining transaction data and crypto wallet balances, both of which are helpful when deciding whether to invest. E.g. we can look into the top ERC20 token by typing `top` which returns the following table:

```
2022 Jul 12, 08:45 (🦋) /crypto/onchain/ $ top

                                                     Top ERC20 Tokens
┏━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃ rank ┃ name            ┃ symbol  ┃ price    ┃ txsCount ┃ transfersCount ┃ holdersCount ┃ twitter      ┃ coingecko       ┃
┡━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ 1    │ WETH            │ WETH    │ 1067.34  │ 6.9M     │ 106.4M         │ 540.4K       │              │ weth            │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 2    │ Tether USD      │ USDT    │ 1.00     │ 128.5M   │ 151.1M         │ 4.6M         │ Tether_to    │ tether          │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 3    │ USD Coin        │ USDC    │ 1.00     │ 23.4M    │ 43.8M          │ 1.5M         │              │ usd-coin        │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 4    │ Dai             │ DAI     │ 1.00     │ 4.2M     │ 14.6M          │ 480.3K       │ MakerDAO     │ dai             │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 5    │ Shiba Inu       │ SHIB    │ 0.00     │ 5.5M     │ 7.9M           │ 1.2M         │ Shibtoken    │ shiba-inu       │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 6    │ Wrapped Bitcoin │ WBTC    │ 19756.87 │ 648.1K   │ 3.7M           │ 50.1K        │              │ wrapped-bitcoin │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 7    │ Chainlink       │ LINK    │ 6.16     │ 5.9M     │ 11.5M          │ 679.8K       │ chainlink    │ chainlink       │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 8    │ Curve DAO Token │ CRV     │ 0.90     │ 732.2K   │ 2.5M           │ 74.6K        │ curvefinance │ curve-dao-token │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 9    │ Matic Network   │ MATIC   │ 0.57     │ 3.5M     │ 4.3M           │ 460.2K       │ maticnetwork │ matic-network   │
├──────┼─────────────────┼─────────┼──────────┼──────────┼────────────────┼──────────────┼──────────────┼─────────────────┤
│ 10   │ SAITAMA         │ SAITAMA │ 0.00     │ 9K       │ 139K           │ 121.3K       │              │                 │
└──────┴─────────────────┴─────────┴──────────┴──────────┴────────────────┴──────────────┴──────────────┴─────────────────┘
```

### Examples

To access much of the Ethereum features, an ethereum address needs to be entered. As an example this can be `0x71C7656EC7ab88b098defB751B7401B5f6d8976F` which can be entered within the <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/address/" target="_blank">address</a> command as follows:

```
2022 Jul 12, 08:48 (🦋) /crypto/onchain/ $ address 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
```

Which allows you to see the <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/balance/" target="_blank">balance</a> and <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/crypto/onchain/hist/" target="_blank">hist</a> which returns the following for `balance`:

```
2022 Jul 12, 08:53 (🦋) /crypto/onchain/ $ balance

                                                 Blockchain Token Information
┏━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┓
┃ index ┃ tokenName                                     ┃ tokenSymbol ┃ tokenAddress                               ┃ balance ┃
┡━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━┩
│ 1     │ Ethereum                                      │ ETH         │ 0x0000000000000000000000000000000000000000 │ 32.65   │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 2     │ FUCKtoken                                     │ FUCK        │ None                                       │ 2.00    │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 3     │ DABcoin                                       │ DAB         │ None                                       │ 2.00    │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 4     │ Link Platform                                 │ LNK         │ None                                       │ 29.00   │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 5     │ ASStoken                                      │ ASS         │ None                                       │ 10.00   │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 6     │ Blowjob                                       │ BJ          │ None                                       │ 51.00   │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 7     │ FinallyUsableCryptoKarma                      │ FUCK        │ None                                       │ 2.00    │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 8     │ WeTrust                                       │ TRST        │ None                                       │ 0.18    │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 9     │ Edgeless                                      │ EDG         │ None                                       │ 1.00    │
├───────┼───────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────┼─────────┤
│ 10    │ Cryptonex (CNX) - Global Blockchain Acquiring │ CNX         │ None                                       │ 1000.00 │
└───────┴───────────────────────────────────────────────┴─────────────┴────────────────────────────────────────────┴─────────┘
```

And `hist` returns the following:

```

2022 Jul 12, 08:53 (🦋) /crypto/onchain/ $ hist

                                             Historical Transactions Information
┏━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┓
┃ timestamp           ┃ transactionHash                                                    ┃ token                 ┃ value   ┃
┡━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━┩
│ 2021-10-09 15:43:04 │ 0xddd8796647a24ccfbf0f0d9b2a762dd12424d4cb60fd38d8098fb9b1b7fb8683 │ Kuma Inu              │ 1.8B    │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-04 22:04:48 │ 0xf6ddcad5ccf24988d7c2ad9884cf00b857a13f805045bb568123eafb206a1c0e │ Tux                   │ 100.00  │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-06 10:35:44 │ 0x6022c79ad9591491a66774553e7c175be75f5cd7d0c6db38b07af5825a0a2785 │ Ankr                  │ 1974.35 │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 00:56:43 │ 0xfaa7fe13cb1263eb52495c83c3e4d212c68289eac6473a169820f592cde60580 │ Ethereum Name Service │ 46.3K   │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 13:22:11 │ 0x06c1f99a2f592a79d3ec3d0c281c6530aed36e42b04afb3907630503dea294a3 │ Ethereum Name Service │ 345.00  │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 13:22:11 │ 0x06c1f99a2f592a79d3ec3d0c281c6530aed36e42b04afb3907630503dea294a3 │ Ethereum Name Service │ 1955.00 │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 16:15:57 │ 0xd13c39ade2ff2f792e97874beaca9bfaa48298e5136e97bb33f49eafd0b1cffd │ Ethereum Name Service │ 2500.00 │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 18:49:13 │ 0x0c4bf722f477dbceda0ca4ac9f02adbd813b2f80e4b613069265de5b12861115 │ Ethereum Name Service │ 1800.00 │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 18:49:13 │ 0x0c4bf722f477dbceda0ca4ac9f02adbd813b2f80e4b613069265de5b12861115 │ USD Coin              │ 73.1K   │
├─────────────────────┼────────────────────────────────────────────────────────────────────┼───────────────────────┼─────────┤
│ 2021-11-09 18:49:13 │ 0x0c4bf722f477dbceda0ca4ac9f02adbd813b2f80e4b613069265de5b12861115 │ USD Coin              │ 7977.07 │
└─────────────────────┴────────────────────────────────────────────────────────────────────┴───────────────────────┴─────────┘
```