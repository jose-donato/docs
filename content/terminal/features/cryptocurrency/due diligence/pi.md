---
title: pi
description: OpenBB Terminal Function
---

# pi

Display asset's project info [Source: https://messari.io]

### Usage

```python
usage: pi
```

---

## Parameters

This command has no parameters

---

## Examples

```python
2022 Jul 13, 07:51 (🦋) /crypto/dd/ $ pi

                                                                                                                                BTC General Info
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Metric             ┃ Value                                                                                                                                                                                                                                                   ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Project Details    │ Bitcoin is the first distributed consensus-based censorship-resistant, permissionless, peer-to-peer payment settlement network with a provably scarce, programmable, native currency.                                                                   │
│                    │ Bitcoin (BTC), the native asset of the Bitcoin blockchain, is the world's first digital currency without a central bank or administrator. The Bitcoin network is an emergent decentralized monetary institution that exists through the interplay       │
│                    │ between full nodes, miners, and developers. It is set by a social contract that is created and opted into by the users of the network and hardened                                                                                                      │
│                    │ through game theory and cryptography. Bitcoin is the first, oldest, and largest cryptocurrency in the world.                                                                                                                                           │
├────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Technology Details │ "Bitcoin" is a label used for a protocol and a currency.                                                                                                                                                                                                │
│                    │                                                                                                                                                                                                                                                         │
│                    │ Bitcoin, the currency, is bits of data usable outside the limitations of the protocol using second-layer solutions like a href="https://messari.io/resource/lightning-network"Lightning Network/a payment channels.                                 │
│                    │                                                                                                                                                                                                                                                         │
│                    │ Bitcoin, the protocol, is a distributed, time-stamped ledger of a href="https://messari.io/resource/utxo"unspent transaction output/a (UTXO) transfers stored in an append-only chain of 1MB data blocks. A network of mining and economic a       │
│                    │ href="https://messari.io/resource/node"nodes/a maintains this ledger by validating, propagating, and fighting to include a href="https://messari.io/resource/mempool"mempool/a transactions in new blocks. Economic nodes (aka "full nodes")     │
│                    │ receive transactions from other network participants, validate them against network consensus rules and double-spend vectors, and propagate the transactions to other full nodes that also validate and propagate. Valid transactions are sent to the   │
│                    │ network's mempool waiting for mining nodes to confirm them via inclusion in the next block.                                                                                                                                                             │
│                    │                                                                                                                                                                                                                                                         │
│                    │ Mining nodes work to empty the mempool usually in a highest-to-lowest fee order by picking transactions to include in the next block and racing against each other to generate a hash less than the target number set by Bitcoin's difficulty           │
│                    │ adjustment algorithm. Bitcoin uses a Proof-of-Work (PoW) consensus mechanism to establish the chain of blocks with the most accumulated “work” (a.k.a., energy spent on solved hashes) as the valid chain. Other network peers can cheaply verify the   │
│                    │ chain’s work.                                                                                                                                                                                                                                           │
│                    │                                                                                                                                                                                                                                                         │
│                    │ Mining difficulty regularly adjusts to maintain Bitcoin's average ten-minute block schedule. Mining nodes add new blocks to whatever chain has the largest accumulated proof of work maintained by a network of economic nodes with downloaded copies   │
│                    │ of the same chain.                                                                                                                                                                                                                                      │
│                    │                                                                                                                                                                                                                                                         │
│                    │ Learn More:                                                                                                                                                                                                                                             │
│                    │ Bitcoin Developer's Guide                                                                                                                                                                                                                               │
│                    │ Mastering Bitcoin                                                                                                                                                                                                                                       │
└────────────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

                            BTC Public Repositories
┏━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ Name                    ┃ Link                               ┃ License_type ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ Bitcoin Core Repository │ https://github.com/bitcoin/bitcoin │ MIT License  │
└─────────────────────────┴────────────────────────────────────┴──────────────┘

                                                                                                                              BTC Vulnerabilities
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Title                           ┃ Date                      ┃ Type      ┃ Details                                                                                                                                                                                            ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ Value Overflow Incident         │ 2010-08-06 04:00:00+00:00 │ Inflation │ On 6 August 2010, a major vulnerability in the bitcoin protocol was spotted. Transactions weren't properly verified before they were included in the transaction log or blockchain, which let      │
│                                 │                           │           │ users bypass bitcoin's economic restrictions and create an indefinite number of bitcoins. On 15 August, the vulnerability was exploited; over 184 billion bitcoins were generated in a transaction │
│                                 │                           │           │ and sent to two addresses on the network. Within hours, the transaction was spotted and erased from the transaction log after the bug was fixed and the network forked to an updated version of    │
│                                 │                           │           │ the bitcoin protocol. This was the only major security flaw found and exploited in bitcoin's history.                                                                                              │
├─────────────────────────────────┼───────────────────────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Denial of Service Vulnerability │ 2018-09-20 04:00:00+00:00 │ Inflation │ On September 17, Bitcoin Core developers discovered that older versions of Bitcoin Core will crash if they try to process a block containing a transaction that attempts to spend the same input   │
│                                 │                           │           │ twice. Such blocks are invalid, so they can only be created by a miner willing to sacrifice their allowed income for creating a block of at least 12.5 BTC (about $80,000 USD as of this writing). │
│                                 │                           │           │                                                                                                                                                                                                    │
│                                 │                           │           │ Soon after discovering the DDoS attack vulnerability, Bitcoin Core developers also discovered an inflation bug which they quickly determined had the same root cause and fix. They decided to      │
│                                 │                           │           │ disclose the DDoS vulnerability immediately while keeping the inflation bug quiet. This provided developers time to reach out to miners, businesses, and other affected systems about upgrading    │
│                                 │                           │           │ their software, while also providing additional time to fix the exploit.                                                                                                                           │
│                                 │                           │           │                                                                                                                                                                                                    │
│                                 │                           │           │ https://bitcoincore.org/en/2018/09/18/release-0.16.3/                                                                                                                                              │
│                                 │                           │           │ https://bitcoincore.org/en/2018/09/20/notice/                                                                                                                                                      │
└─────────────────────────────────┴───────────────────────────┴───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

