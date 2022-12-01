import React, { useContext, useEffect } from "react";

import { Divider, List, Typography ,Button} from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { ShoppingOutlined } from "@ant-design/icons";
import { OrderContext } from "../../context/OrderContext/OrderState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {createOrder} = useContext(OrderContext)
  const cartNames = cart.map((cartItem) => cartItem.name);
const createNewOrder =()=>{
    createOrder(cart)
    clearCart()
}
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Divider orientation="left">Your Cart</Divider>
      <List
        header={<div>Products Selected</div>}
        footer={
          <div>
            <Button onClick={clearCart}>Clear Cart</Button>
            <Button onClick={createNewOrder}>Buy <ShoppingOutlined /></Button>
          </div>
        }
        bordered
        dataSource={cartNames}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
