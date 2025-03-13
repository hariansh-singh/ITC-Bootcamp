
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addProduct } from "../services/ProductService";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const validationRules = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]{1,100}$/, "Only alphabate allow"),
  price: Yup.number()
    .required("Price is required")
    .typeError("Price must be a valid number"),

  quantity: Yup.number()
    .required("quantity is required")
    .typeError("quantity must be a valid number"),
});

const AddProduct = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
    },
    validationSchema: validationRules,
    onSubmit: (values) => {
      addProduct(values)
        .then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Product added successfully",
              showDenyButton: true,
              confirmButtonText: "Go to Home",
              denyButtonText: "Stay here",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/");
              }
            });
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <h1>Add Product</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <Alert variant="danger">{formik.errors.name}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price ? (
            <Alert variant="danger">{formik.errors.price}</Alert>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Quantity"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <Alert variant="danger">{formik.errors.quantity}</Alert>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
