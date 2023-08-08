import Home from './components/Home';
import MovieDetails from './components/MovieDetails'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom';
import Ticket from './components/Ticket';

function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/show/:id" element={<MovieDetails/>} />
    <Route path="/Ticket/:id" element={<Ticket/>} />
   
      </Routes>
    </>
  )
}

export default App
