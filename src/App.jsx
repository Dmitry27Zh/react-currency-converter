import { useState } from 'react'
import './App.css'
import Block from './Block'

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('EUR')

  return (
    <div className="App">
      <Block currency={currencyFrom} onCurrencyChange={setCurrencyFrom} />
      <Block currency={currencyTo} onCurrencyChange={setCurrencyTo} />
    </div>
  )
}

export default App
