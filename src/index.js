import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  BrowserRouter,
  Route, 
  Routes 
} from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Proyectos from './components/Proyectos/proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
  
    <Header />
    <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/proyectos' element={<Proyectos />}></Route>
      <Route path='/contacto' element={<Contacto />}></Route>
    
      
    </Routes>
    <Footer />
    
    </BrowserRouter> 
   
  </React.StrictMode>
);


