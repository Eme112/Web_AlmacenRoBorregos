import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import MaterialInfo from './pages/MateialInfo';
import Materiales from './pages/Materiales';
import Reservar from './pages/Reservar';

/*const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<MaterialInfo/>}/>
      <Route path='/materiales' element={<Materiales/>}/>
    </Routes>
  </Router>,\
  </React.StrictMode>,
  document.getElementById('root')
);