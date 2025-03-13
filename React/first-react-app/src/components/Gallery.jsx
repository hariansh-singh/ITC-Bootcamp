import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import axios from "axios";

function Gallery() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const URL = "https://picsum.photos/v2/list";

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {postData.slice(0, 18).map((imgData, index) => (
          <Col className="my-2" key={index} xs={6} md={4}>
            <Image
              width={300}
              height={200}
              src={imgData.download_url}
              thumbnail
              className="border-black"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
