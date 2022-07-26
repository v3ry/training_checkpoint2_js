import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
      <Header name="Tout sur les jeux"/>
      <GameList/>
    </div>
  );
}

export default App;
