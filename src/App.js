import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Character from './Components/Character';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
        <header>
           <h3>⚔️ GOT Characters ⚔️</h3>
        </header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Character/:id' element={<Character/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
