import './App.css';
import Main from './components/Main';
import PokemonsInfro from './components/PokemonInfo';
import { Routes, Route } from 'react-router-dom';
// import Main2 from './components/Main2';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Pokemoninfo/:id/*' element={<PokemonsInfro />} />
      </Routes>
    </div>
  );
}

export default App;
