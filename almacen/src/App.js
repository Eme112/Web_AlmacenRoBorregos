import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import MaterialInfo from './components/MaterialInfo'
import MaterialReservation from './components/MaterialReservation'
import AddMaterial from './components/AddMaterial'
import RequestMaterial from './components/RequestMaterial';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/" element={<Login />}   />
        <Route path="/" element={<Search />}   />
        <Route path="/" element={<MaterialInfo />}   />
        <Route path="/" element={<MaterialReservation />}   />
        <Route path="/" element={<AddMaterial />}   />
        <Route path="/" element={<RequestMaterial />}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;