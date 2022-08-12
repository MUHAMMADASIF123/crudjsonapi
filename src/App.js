import React from "react";
import './App.css';

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
