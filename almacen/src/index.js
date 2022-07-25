import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import MaterialInfo from './pages/MateialInfo';
import Reservar from './pages/Reservar';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<MaterialInfo/>}/>
      <Route path='/reservar' element={<Reservar/>}/>
    </Routes>
  </Router>,\
  </React.StrictMode>,
  document.getElementById('root')
);