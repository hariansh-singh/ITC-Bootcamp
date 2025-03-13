import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Addproduct = () => {
  return (
    <div className="mt-4">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="manufracturer">
          <Form.Label>Manufracturer</Form.Label>
          <Form.Control type="text" placeholder="Enter manufracturer" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="availableitems">
          <Form.Label>Available Items</Form.Label>
          <Form.Control type="text" placeholder="Enter Available items" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="file" placeholder="Enter Image URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Addproduct;
