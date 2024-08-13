import './App.css'
import Navbar from './componentes/navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import inicio from './componentes/Inicio';
function App() {

  return (
    <>
    <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<inicio/>}/>
    </Routes>
  </Router>
   </>
  )
}

export default App
