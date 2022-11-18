---
title: show_available_pairs_for_given_symbol
description: OpenBB SDK Function
---

# show_available_pairs_for_given_symbol

Return all available quoted assets for given symbol. [Source: Coinbase]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L21)

```python
def show_available_pairs_for_given_symbol(symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Uppercase symbol of coin e.g BTC, ETH, UNI, LUNA, DOT ... | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[str, list] | Symbol and list of available pairs |

---

## Examples

---

