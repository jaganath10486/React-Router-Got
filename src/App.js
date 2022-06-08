import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Character from './Components/Character';
import NotFound from './Components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import 'font-awesome/css/font-awesome.min.css';


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
        <Footer/>
    </div>
  );
}

export default App;
