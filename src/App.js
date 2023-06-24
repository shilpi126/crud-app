import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import Home from './pages/Home';

import {BrowserRouter, Routes,Route} from "react-router-dom"
import UpdateData from './pages/UpdateData';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/form" element={<Form/>}/>
      </Routes>
      <Routes>
        <Route path="/update/:id" element={<UpdateData/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
