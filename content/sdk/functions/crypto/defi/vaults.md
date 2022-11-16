---
title: vaults
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vaults

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.defi.coindix_model.get_defi_vaults

```python title='openbb_terminal/cryptocurrency/defi/coindix_model.py'
def get_defi_vaults(chain: Optional[str], protocol: Optional[str], kind: Optional[str], ascend: bool, sortby: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/coindix_model.py#L107)

Description: Get DeFi Vaults Information. DeFi Vaults are pools of funds with an assigned strategy which main goal is to

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| chain | str | Blockchain - one from list [<br/>'ethereum', 'polygon', 'avalanche', 'bsc', 'terra', 'fantom',<br/>'moonriver', 'celo', 'heco', 'okex', 'cronos', 'arbitrum', 'eth',<br/>'harmony', 'fuse', 'defichain', 'solana', 'optimism'<br/>] | None | False |
| protocol | str | DeFi protocol - one from list: [<br/>'aave', 'acryptos', 'alpaca', 'anchor', 'autofarm', 'balancer', 'bancor',<br/>'beefy', 'belt', 'compound', 'convex', 'cream', 'curve', 'defichain', 'geist',<br/>'lido', 'liquity', 'mirror', 'pancakeswap', 'raydium', 'sushi', 'tarot', 'traderjoe',<br/>'tulip', 'ubeswap', 'uniswap', 'venus', 'yearn'<br/>] | None | False |
| kind | str | Kind/type of vault - one from list: ['lp','single','noimploss','stable'] | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top 100 DeFi Vaults for given chain/protocol sorted by APY. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.defi.coindix_view.display_defi_vaults

```python title='openbb_terminal/cryptocurrency/defi/coindix_view.py'
def display_defi_vaults(chain: Optional[str], protocol: Optional[str], kind: Optional[str], limit: int, sortby: str, ascend: bool, link: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/coindix_view.py#L19)

Description: Prints table showing Top DeFi Vaults - pools of funds with an assigned strategy which main goal is to

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| chain | str | Blockchain - one from list [<br/>'ethereum', 'polygon', 'avalanche', 'bsc', 'terra', 'fantom',<br/>'moonriver', 'celo', 'heco', 'okex', 'cronos', 'arbitrum', 'eth',<br/>'harmony', 'fuse', 'defichain', 'solana', 'optimism'<br/>] | None | False |
| protocol | str | DeFi protocol - one from list: [<br/>'aave', 'acryptos', 'alpaca', 'anchor', 'autofarm', 'balancer', 'bancor',<br/>'beefy', 'belt', 'compound', 'convex', 'cream', 'curve', 'defichain', 'geist',<br/>'lido', 'liquity', 'mirror', 'pancakeswap', 'raydium', 'sushi', 'tarot', 'traderjoe',<br/>'tulip', 'ubeswap', 'uniswap', 'venus', 'yearn'<br/>] | None | False |
| kind | str | Kind/type of vault - one from list: ['lp','single','noimploss','stable'] | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| link | bool | Flag to show links | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>