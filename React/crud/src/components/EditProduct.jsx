import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getProductById, updateData } from "../services/ProductService";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { useNavigate, useParams } from "react-router-dom";

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

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        if (res.data) {
          setProduct(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: product?.name,
      price: product?.price,
      quantity: product?.quantity,
    },
    validationSchema: validationRules,
    onSubmit: (values) => {
      updateData(id, values)
        .then((res) => {
          if (res.data) {
            Swal.fire("Product information updated!");
            navigate("/")
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <h1>Edit Product</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
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
            value={formik.values.price}
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
            value={formik.values.quantity}
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

export default EditProduct;
