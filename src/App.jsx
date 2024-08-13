import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './PlantList';
import AddPlant from './AgregarPlanta';
import PlantGraphs from './Graficas';
import Navigation from './NavBar';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/plants" element={<PlantList />} />
        <Route path="/add" element={<AddPlant />} />
        <Route path="/graphs" element={<PlantGraphs />} />
        <Route path="/" element={<PlantList />} />
      </Routes>
    </Router>
  );
}

export default App;
