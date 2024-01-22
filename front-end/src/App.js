import logo from './logo.svg';
import './App.css';
import { useNote } from './api';

function App() {
  const note = useNote();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="title">React App</span>
        <span className="title">
          Fetched text:
          {note}
        </span>
      </header>
    </div>
  );
}

export default App;
