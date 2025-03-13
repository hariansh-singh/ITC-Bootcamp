import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteProduct, getAllProduct } from "../services/ProductService";
import ProductList from "./ProductList";
import { myAddCart } from "../store/CartSlice";

const Home = () => {
  const [proData, setProData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        console.log(res.data);
        setProData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delPro = (id) => {
    Swal.fire({
      title: "Do you want delete?",
      showDenyButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id)
          .then((res) => {
            let data = proData.filter((pro) => pro.id != id);
            setProData(data);
            Swal.fire("Product Delete", "", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const addCart = (prod) => {
    if (localStorage.getItem("myCart") != undefined) {
      let flag = 0;

      let arr = JSON.parse(localStorage.getItem("myCart"));
      arr.forEach((Value, index) => {
        if (Value.id === prod.id) {
          arr[index].purchaseQuantity += 1;
          flag = 1;
        }
      });

      if (flag == 0) {
        let cartData = { ...prod, purchaseQuantity: 1 };
        arr.push(cartData);

        localStorage.setItem("myCart", JSON.stringify(arr));
        // myAddCart(arr);
        dispatch(myAddCart(arr));
        Swal.fire("Product added to cart");
      } else {
        localStorage.setItem("myCart", JSON.stringify(arr));
        // myAddCart(arr);
        dispatch(myAddCart(arr));
        alert("Product add cart successfully!");
      }
    } else {
      let arr = [];
      let cartData = { ...prod, purchaseQuantity: 1 };
      arr.push(cartData);
      localStorage.setItem("myCart", JSON.stringify(arr));
      Swal.fire("Product added to cart");
    }
  };

  return (
    <div>
      <h2> Latest Products</h2>
      <Container>
        <Row className="gap-4">
          {proData.map((product) => (
            <Col className="md-col-4" key={product.id}>
              <ProductList prod={product} delPro={delPro} addCart={addCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
