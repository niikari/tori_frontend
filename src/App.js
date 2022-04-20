import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';
import UserState from './context/UserState';

function App() {

  return (
    <div className="App">
      <UserState>
        <Navigator />
      </UserState>
    </div>
  );
}

export default App;
