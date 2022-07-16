import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Search from './components/search/Search'
import MaterialInfo from './components/material-info/MaterialInfo'
import MaterialReservation from './components/material-reservation/MaterialReservation'
import AddMaterial from './components/add-material/AddMaterial'
import RequestMaterial from './components/request-material/RequestMaterial';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/login" element={<Login />}   />
        <Route path="/search" element={<Search />}   />
        <Route path="/material-info" element={<MaterialInfo />}   />
        <Route path="/material-reservation" element={<MaterialReservation />}   />
        <Route path="/add-material" element={<AddMaterial />}   />
        <Route path="/request-material" element={<RequestMaterial />}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;