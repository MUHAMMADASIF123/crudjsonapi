import React from "react";
import './App.css';


import Editeuser from './Components/Editeuser'
import View from './Components/View'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from "./Components/Addproduct";
import Allproducts from "./Components/Allproducts";

function App() {
  return (
    <div className="App">
         <Navbar/>
        
      <Routes>
     
        <Route path="/" element={<Allproducts/>}/>
      
        <Route path="users/add" element={<Addproduct/>}/>
        <Route path="/users/edit/:id" element={<Editeuser/>}/>
        <Route path="/users/:id" element={<View/>}/>
        {/* <Route path="/addproduct" element={<Addproduct/>}/> */}
        </Routes>
    <Footer/>
    </div>
  );
}

export default App;
