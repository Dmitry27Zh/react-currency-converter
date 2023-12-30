import { useEffect, useState } from 'react'
import api from './api/fake/currency'
import './App.css'
import Block from './Block'
import { convert } from './utils/convert'

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('EUR')
  const [valueFrom, setValueFrom] = useState(0)
  const [valueTo, setValueTo] = useState(1)
  const [rates, setRates] = useState({})
  useEffect(() => {
    api
      .fetch()
      .then((data) => setRates(data.rates))
      .catch((e) => {
        console.warn(e)
        alert('Error')
      })
  }, [])
  const handleValueFromChange = (value) => {
    setValueFrom(value)

    if (isFinite(value)) {
      setValueTo(convert(Number(value), currencyFrom, currencyTo, rates))
    }
  }
  const handleValueToChange = (value) => {
    setValueTo(value)

    if (isFinite(value)) {
      setValueFrom(convert(Number(value), currencyTo, currencyFrom, rates))
    }
  }
  useEffect(() => {
    handleValueFromChange(valueFrom)
  }, [currencyFrom])
  useEffect(() => {
    handleValueToChange(valueTo)
  }, [currencyTo])

  return (
    <div className="App">
      <Block
        currency={currencyFrom}
        onCurrencyChange={setCurrencyFrom}
        value={valueFrom}
        onValueChange={(e) => handleValueFromChange(e.target.value)}
      />
      <Block
        currency={currencyTo}
        onCurrencyChange={setCurrencyTo}
        value={valueTo}
        onValueChange={(e) => handleValueToChange(e.target.value)}
      />
    </div>
  )
}

export default App
