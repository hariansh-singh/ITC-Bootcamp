import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function Cards({ imgdataprop }) {
  return (
    <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgdataprop.img}
        style={{ objectFit: "cover", height: "180px", borderRadius: "10px" }}
        alt="Card Image"
      />
      <Card.Body>
        <Card.Title className="text-primary">{imgdataprop.title}</Card.Title>
        <Card.Text className="text-muted">
          {imgdataprop.desc.slice(0, 80) + ".."}
        </Card.Text>
        <Button variant="outline-primary" className="w-100">
          <i className="bi bi-arrow-right"></i> Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
