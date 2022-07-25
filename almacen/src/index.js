import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservar from './pages/Reservar';
import Materiales from './pages/Materiales';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/reservar' element={<Reservar/>}/>
      <Route path='/materiales' element={<Materiales/>}/>
    </Routes>
  </Router>,\
  </React.StrictMode>,
  document.getElementById('root')
);