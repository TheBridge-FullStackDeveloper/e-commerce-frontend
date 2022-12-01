import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, Badge, Space } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      style={{
        backgroundColor: "lightGray"
      }}
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="products" icon={<ShopOutlined />}>
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          {" "}
          <Badge count={cart.length} size="small">
            Cart
          </Badge>
        </Link>
      </Menu.Item>
      {token ? (
        <>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login" icon={<UserAddOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
