# events

## crypto_dd_coinpaprika_model.get_coin_events_by_id

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L89)

Description: Get all events related to given coin like conferences, start date of futures trading etc.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | id of coin from coinpaprika e.g. Ethereum - > 'eth-ethereum' | None | False |
| sortby | str | Key by which to sort data. Every column name is valid
(see for possible values:
https://api.coinpaprika.com/docs#tag/Coins/paths/~1coins~1%7Bcoin_id%7D~1events/get). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Events found for given coin
Columns: id, date , date_to, name, description, is_conference, link, proof_image_link |

## Examples

