import './App.css'

function App() {
  return (
    <div className="App">
      <div className="block">
        <ul className="currencies">
          <li className="active">USD</li>
          <li>EUR</li>
          <li>RUB</li>
          <li>
            <svg height="50px" viewBox="0 0 50 50" width="50px">
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </li>
        </ul>
        <input type="number" placeholder={0} />
      </div>
      <div className="block">
        <ul className="currencies">
          <li className="active">USD</li>
          <li>EUR</li>
          <li>RUB</li>
          <li>
            <svg height="50px" viewBox="0 0 50 50" width="50px">
              <rect fill="none" height="50" width="50" />
              <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
          </li>
        </ul>
        <input type="number" placeholder={0} />
      </div>
    </div>
  )
}

export default App