import logo from './logo.svg';
import './App.css';
import {EmiCalculator} from 'emicalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          EMI :  <EmiCalculator p='3000000' i='8.61'  t='360' />
        </a>
        
      </header>
      
    </div>
  );
}

export default App;
