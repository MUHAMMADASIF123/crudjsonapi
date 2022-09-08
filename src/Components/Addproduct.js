import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Addproduct = () => {
  //   let history = useHistory();
  const history = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  const [user, setUser] = useState({
    name: "",
    id: "",
    price: "",
    Img: "",
    // text: "",
    // date:"",
    // num:""
  });
  //num ,date,name, status, status1, Other, text
  const {name,id,Img,price } = user;
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
   
    <>
    
      <form onSubmit={(e) => onSubmit(e)}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group ">
             <input
               type="number"
               className="form-control form-control-lg mt-4"
               placeholder="Enter ID "
               name="id"
               value={id}
             onChange={(e) => onInputChange(e)}
             />
         </div>
         <div className="form-group ">
             <input
               type="text"
               className="form-control form-control-lg mt-4"
               placeholder="Enter Name of Product"
               name="name"
               value={name}
             onChange={(e) => onInputChange(e)}
             />
         </div>
         <div className="form-group ">
             <input
               type="number"
               className="form-control form-control-lg mt-4"
               placeholder="Enter price of product"
               name="price"
               value={price}
             onChange={(e) => onInputChange(e)}
             />
         </div>
         <div className="form-group ">
             <input
               type="file"
               className="form-control form-control-lg mt-4"
               placeholder="Enter image"
               name="Img"
               value={Img}
             onChange={(e) => onInputChange(e)}
             />
         </div>
      
        
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            <a className="text-decoration-none text-white" href="/">Close</a>
          </Button>
          <Button type="submit" variant="primary" onClick={onSubmit}>
           <a className="text-decoration-none text-white" href="/"> Save Changes</a>
          </Button>
  
        </Modal.Footer>
      </Modal>
    
    </form>
      
        
    </>
  );
};

export default Addproduct;
