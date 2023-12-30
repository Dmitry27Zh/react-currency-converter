export function convert(value, currencyFrom, currencyTo, rates) {
  if (currencyFrom === currencyTo) {
    return value
  }

  const factorA = rates[currencyFrom] ?? 1
  const price = value / factorA
  const factorB = rates[currencyTo] ?? 1
  const result = price * factorB

  return result
}
