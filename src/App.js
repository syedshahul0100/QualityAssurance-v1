import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home  from './Home';
import Nav from './Nav.js';
import Movies from './Movies.js';
import Contactus from './About';
import About from './Contactus.js';
import Charector from './Charector';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Movies" element={<Movies />} />
      <Route path='contact' element={<Contactus/>} />
      <Route path='about' element={<About/>} />
     <Route path='Char'   element={<Charector/>}      /> 
      </Routes>
    
      
      </BrowserRouter>
    </div>
  );
}

export default App;
