export function convert(value, currencyFrom, currencyTo, rates) {
  const factor = rates[currencyFrom] ?? 1
  const price = value / factor
  const result = price * rates[currencyTo]

  return result
}
