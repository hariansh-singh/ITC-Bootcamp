import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.cartData);
  console.log(cartData);

  const grandTotal = cartData.reduce(
    (total, item) => total + item.price * item.purchaseQuantity,
    0
  );

  return (
    <Table striped bordered hover style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartData?.map((ProductList, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{ProductList.name}</td>
            <td>Rs. {ProductList.price}</td>
            <td>
              <button onClick={() => dispatch(decrement(index))}>-</button>
              <span>{ProductList.purchaseQuantity}</span>
              <button onClick={() => dispatch(increment(index))}>+</button>
            </td>
            <td>Rs. {ProductList.price * ProductList.purchaseQuantity}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4">Grand Total:</td>
          <td>Rs. {grandTotal}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
