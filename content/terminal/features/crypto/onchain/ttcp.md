---
title: ttcp
description: OpenBB Terminal Function
---

# OnChain

## ttcp

### Description: 

Display most traded crypto pairs on given decentralized exchange in chosen time period. [Source: https://graphql.bitquery.io/]

### Usage: 
```python
usage: ttcp [-l LIMIT]
            [-e {1inch,AfroDex,AirSwap,Amplbitcratic,Balancer,BestSwap,Bitox,CellSwap,Cellswap,Cofix,Coinchangex,Curve,DDEX,DUBIex,DecentrEx,DeversiFi,Dodo,ETHERCExchange,EtherBlockchain,EtherDelta,Ethernext,Ethfinex,FEGex,FFFSwap,Fordex,GUDecks,GUDeks,HiSwap,IDEX,LedgerDex,Matcha,Miniswap,Mooniswap,Oasis,OpenRelay,S.Finance,SakeSwap,SeedDex,SingularX,StarBitEx,SushiSwap,SwapX,SwitchDex,TacoSwap,TokenJar,TokenStore,TokenTrove,Tokenlon,TradexOne,Uniswap,ZeusSwap,dYdX,dex.blue}]
            [-d DAYS] [-s {base,quoted,trades,tradeAmount}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 10 | False | None |
| exchange | Decentralized exchange name. | None | False | 1inch, AfroDex, AirSwap, Amplbitcratic, Balancer, BestSwap, Bitox, CellSwap, Cellswap, Cofix, Coinchangex, Curve, DDEX, DUBIex, DecentrEx, DeversiFi, Dodo, ETHERCExchange, EtherBlockchain, EtherDelta, Ethernext, Ethfinex, FEGex, FFFSwap, Fordex, GUDecks, GUDeks, HiSwap, IDEX, LedgerDex, Matcha, Miniswap, Mooniswap, Oasis, OpenRelay, S.Finance, SakeSwap, SeedDex, SingularX, StarBitEx, SushiSwap, SwapX, SwitchDex, TacoSwap, TokenJar, TokenStore, TokenTrove, Tokenlon, TradexOne, Uniswap, ZeusSwap, dYdX, dex.blue |
| days | Number of days to display data for. | 30 | False | None |
| sortby | Sort by given column. | tradeAmount | False | base, quoted, trades, tradeAmount |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


