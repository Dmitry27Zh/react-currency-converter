import { useEffect, useState } from 'react'
import api from './api/fake/currency'
import './App.css'
import Block from './Block'
import { convert } from './utils/convert'

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('EUR')
  const [valueFrom, setValueFrom] = useState('0')
  const [valueTo, setValueTo] = useState('0')
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
  const handleValueFromChange = (e) => {
    setValueFrom(e.target.value)
    setValueTo(convert(Number(e.target.value), currencyFrom, currencyTo, rates))
  }
  const handleValueToChange = (e) => {
    setValueTo(e.target.value)
    setValueFrom(convert(Number(e.target.value), currencyFrom, currencyTo, rates))
  }

  return (
    <div className="App">
      <Block
        currency={currencyFrom}
        onCurrencyChange={setCurrencyFrom}
        value={valueFrom}
        onValueChange={handleValueFromChange}
      />
      <Block
        currency={currencyTo}
        onCurrencyChange={setCurrencyTo}
        value={valueTo}
        onValueChange={handleValueToChange}
      />
    </div>
  )
}

export default App
