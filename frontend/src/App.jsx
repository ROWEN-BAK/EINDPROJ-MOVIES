import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Navigation from './pages/Navigation';

function App() {

  
  

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NoPage />}/> </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
