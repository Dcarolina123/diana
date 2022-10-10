import { Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import { Personajes } from './componets/Personajes/Personajes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='personajes/:id' element={<Personajes/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
