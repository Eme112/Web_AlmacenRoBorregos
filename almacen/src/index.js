import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import MaterialInfo from './pages/MateialInfo';
import Materiales from './pages/Materiales';
import RegistrarAlmacen from './pages/RegistrarAlmacen';
import Reservar from './pages/Reservar';


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<MaterialInfo/>}/>
      <Route path='/materiales' element={<Materiales/>}/>
      <Route path='/registrarmateriales' element={<RegistrarAlmacen/>}/>
    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);