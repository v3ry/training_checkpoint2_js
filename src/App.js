import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header name="Tout sur les jeux"/>
        <Routes>
            <Route path="/" element={<GameList/>}/>
            <Route path="/games/:id" element={<GameDetails/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
