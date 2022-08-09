import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Draft = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
    // console.log("hello broo");
  }, []);
  //   const deleteUser= async id =>{
  // await axios.delete(`http://localhost:3003/users/${id}`);
  // loadUsers();
  //   }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Recruitment Name</th>
              <th scope="col">Candidates No</th>
              <th scope="col">Start Data</th>
              <th scope="col">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((emp, index) => (
              <tr>
                <th scope="row">RID-00{index + 1}</th>
                <td>{emp.name}</td>
                <td>{emp.num}</td>
                {/* <td>{emp.id}</td> */}
                <td>{emp.date}</td>
                <td>
                  <select
                    class="form-select btn-primary mx-auto"
                    aria-label="Default select example"
                  >
                    <option >In Progress</option>
                    <option >Complete</option>
                    
                  </select>
                </td>
                <td>
                  <Link class="btn btn-primary ms-2" to={`/users/${emp.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary ms-2"
                    to={`/users/edit/${emp.id}`}
                  >
                    Edite
                  </Link>
                  <Link
                    class="btn btn-danger ms-2"
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
  );
};

export default Draft;
