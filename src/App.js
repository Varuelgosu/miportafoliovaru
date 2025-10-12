import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Cuaderno from './pages/Cuaderno';
import Semana from './pages/Semana';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';
import ReflexionFinal from './pages/ReflexionFinal';
import Bibliografia from './pages/Bibliografia';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cuaderno" element={<Cuaderno />} />
            <Route path="/cuaderno/:semanaId" element={<Semana />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/reflexion-final" element={<ReflexionFinal />} />
            <Route path="/bibliografia" element={<Bibliografia />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;