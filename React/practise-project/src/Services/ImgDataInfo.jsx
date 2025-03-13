import React from "react";
import imgData from "../assets/Data";
import Cards from "../components/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const   ImgDataInfo = () => {
  return (
    <Container className="text-center"> 
      <Row className="g-4 mx-5">
        {imgData.map((data) => {
          return <Col><Cards key={data.id} imgdataprop={data}/></Col>
        })}
      </Row>
    </Container>
  );
};

export default ImgDataInfo;
