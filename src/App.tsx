import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages'
import { Caracteristicas } from './components';
import { ImagenesProvider } from './context/ImagenesContext';

function App() {


  return (
    <ImagenesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:element' element={<Caracteristicas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ImagenesProvider>


  )
}

export default App
