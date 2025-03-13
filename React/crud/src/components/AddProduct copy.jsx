// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// function AddProduct() {
//   const [productData, setProductData] = useState({
//     name: "",
//     price: "",
//     quantity: "",
//   });

//   const handler = (event) => {
//     const { name, value } = event.target;
//     setProductData({...productData, [name]:value})
//   };

//   return (
//     <Form onSubmit={submitHandler}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter name"
//           name="name"
//           onChange={handler}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Price</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter price"
//           name="price"
//           onChange={handler}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Quantity</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter quantity"
//           name="quantity"
//           onChange={handler}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default AddProduct;



import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { addProduct } from '../services/ProductService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const [state,setState]=useState({name:'',price:'',quantity:''});
  const [errMsg,setErrMsg]=useState('');
  const navigate=useNavigate();
  const handler=(event)=>{
     let {name,value}=event.target;
     setState({...state,[name]:value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.name!='' && state.price!='' && state.quantity!=''){
       addProduct(state)
       .then(res=>{
         if(res.data){
          //redirect to products (useNavigate)
          navigate("/");
           Swal.fire("Product Added");
           navigate("/");
         }
       })
       .catch(err=> console.log(err))
    }
    else{
      setErrMsg("Please enter blank fields!")
    }
  }
  return (
    <div>
      <h1>Add Product</h1>
       {errMsg!='' &&  <Alert  variant='danger'>
          {errMsg}
        </Alert>}
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" onChange={handler} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" name="price" onChange={handler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Quantity" name="quantity" onChange={handler} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
    </div>
  )
}

export default AddProduct