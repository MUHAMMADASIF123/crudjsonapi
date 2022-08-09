import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Addusers = () => {
  //   let history = useHistory();
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    status: "",
    status1: "",
    Other: "",
    text: "",
    date:"",
    num:""
  });

  const { num,date,name, status, status1, Other, text } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    // history.push("/");
    history("/");
  };
  return (
    <div className="container">
      <div className=" mx-auto  shadow p-5">
        <h2 className="text-center mb-4">Create New Recruitment</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group ">
            <input
              type="text"
              className="form-control form-control-lg mt-4"
              placeholder="Enter Name of your Recruitment"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg mt-4"
              placeholder="Enter Candidate Number"
              name="num"
              value={num}
              onChange={(e) => onInputChange(e)}
            />
          </div>
           */}

          <div class="row">
            <div class="col">
              <input
                class="form-control form-control-lg mt-4"
                list="datalistOptions"
                id="exampleDataList"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
                placeholder="Job Role:Other"
              />
              <datalist id="datalistOptions">
                <option value="UI/UX Design" />
                <option value="Front-End Developer" />
                <option value="Back-End Developer" />
              </datalist>
            </div>
            <div class="col">
              <input
                class="form-control form-control-lg mt-4"
                list="datalistOptions"
                id="exampleDataList"
                name="status1"
                value={status1}
                onChange={(e) => onInputChange(e)}
                placeholder="Select Level Of Employee"
              />
              <datalist id="datalistOptions">
                <option value="Begineer Level" />
                <option value="Intermediate Level" />
                <option value="Expert level" />
              </datalist>
            </div>
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control form-control-lg mt-4"
              placeholder="Other"
              name="Other"
              value={Other}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group ">
           
              <textarea
                  className="form-control form-control-lg mt-4"
                  placeholder="Write description here"
                  name="text"
                  value={text}
                  onChange={(e) => onInputChange(e)}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
      
            <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg mt-4"
              placeholder="Enter Your date"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
            <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg mt-4"
              placeholder="Enter Candidate Number"
              name="num"
              value={num}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          
        
          <div className="d-flex justify-content-end">

          <button class="btn btn-primary mt-4 " type="submit">
          Save & continue
          </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default Addusers;
