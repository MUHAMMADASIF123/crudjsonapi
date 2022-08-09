import React, { useState, useEffect } from "react";
import axios from "axios";
// import '../App.css';
import { Link } from "react-router-dom";


const Active = () => {
  
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
    <div className="vh-100">
  <div className="row  vh-100 " >
 
    <div className="col-12 text-center">
      <div className="py-4">
        <table className="table table table-striped border shadow " id="myTable">
          <thead>
            <tr>
              <th scope="col">Student_ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Roll_Number</th>
              <th scope="col">Start Data</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((emp, index) => (
              <tr>
                <th scope="row">RID-00{index + 1}</th>
                <td>{emp.name}</td>
                {/* <td>{count}</td> */}
                <td>{emp.num}</td>
                <td>{emp.date}</td>
                
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
    </div>
    </div>
    </div>
  );
  
};


export default Active;
