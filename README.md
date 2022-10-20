# Relaychain analytics squid for Kusama


Custom resolver for fetching transactions totals in specified datetime
range and interval:

```graphql
query MyQuery {
  transactionsChart(from: "2020-03-11T06:33:48.000000Z", to: "2020-03-12T06:48:24.000000Z", interval: "hour") {
    amount
    count
    datetime
  }
}
```
Params `from & to` are not required but can be used only together.

Response:
```json
[
  {
    "amount": "11982314960800000",
    "count": "16",
    "datetime": "2020-03-11T06:00:00.000Z"
  },
  {
    "amount": "1010000000000",
    "count": "2",
    "datetime": "2020-03-11T07:00:00.000Z"
  },
  {
    "amount": "519841306240000",
    "count": "19",
    "datetime": "2020-03-11T08:00:00.000Z"
  }
]
```

```typescript
enum TransactionsChartInterval {
  minute = 'minute',
  hour = 'hour',
  day = 'day',
  month = 'month'
}
```