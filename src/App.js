import React from "react";
import './App.css';
import Active from "./Components/Active";
import Archive from './Components/Archive'
import Draft from './Components/Draft'
import Addusers from './Components/Addusers'
import Editeuser from './Components/Editeuser'
import View from './Components/View'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
         <Navbar/>
        
      <Routes>
     
        <Route path="/" element={<Active/>}/>
        <Route path="archive" element={<Archive/>}/>
        <Route path="draft" element={<Draft/>}/>
        <Route path="users/add" element={<Addusers/>}/>
        <Route path="/users/edit/:id" element={<Editeuser/>}/>
        <Route path="/users/:id" element={<View/>}/>
        </Routes>
    <Footer/>
    </div>
  );
}

export default App;
