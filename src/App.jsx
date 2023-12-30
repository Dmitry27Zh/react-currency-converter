import { useState } from 'react'
import './App.css'
import Block from './Block'

function App() {
  const [currencyFrom, setCurrencyFrom] = useState('USD')
  const [currencyTo, setCurrencyTo] = useState('EUR')
  const [valueFrom, setValueFrom] = useState('0')
  const [valueTo, setValueTo] = useState('0')

  return (
    <div className="App">
      <Block
        currency={currencyFrom}
        onCurrencyChange={setCurrencyFrom}
        value={valueFrom}
        onValueChange={(e) => setValueFrom(e.target.value)}
      />
      <Block
        currency={currencyTo}
        onCurrencyChange={setCurrencyTo}
        value={valueTo}
        onValueChange={(e) => setValueTo(e.target.value)}
      />
    </div>
  )
}

export default App
