import React, { useState, useEffect } from "react";
import axios from "axios";
// import '../App.css';
import { Link } from "react-router-dom";

const Allproducts = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUser(result.data);
    // setCount(result.data.length)
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <Link className="btn btn-outline-primary" to="/users/add">
          Add New Product
        </Link>
      </div>
      <div className="container mt-5">
            <div className="row">
      {users.map((emp, index) => (
        <>
         
              <div className="col-md-4">
              <div class="card" >
  <img src={emp.Img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{emp.id}</h5>
    <p class="card-text">{emp.name}</p>
  <h1 class="card-text">${emp.price}</h1>
  <div>
                  <Link className="btn btn-primary ms-2" to={`/users/${emp.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary ms-2"
                    to={`/users/edit/${emp.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger ms-2"
                    to="#"
                    onClick={() => deleteUser(emp.id)}
                  >
                    Delete
                  </Link>
  </div>
  </div>
</div>
              </div>
          
        </>
          
      ))}
      </div>
          </div>
    </>
  );
};

export default Allproducts;
