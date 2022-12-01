import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from 'antd';

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

//   if(!user){
//     return  
//   }

  return (
    <div>
      <h1>Profile</h1>
      {!user ? <Spin size="large" />: <div>
        
        <p> {user.name}</p>
        <p>{user.orderIds.map(order => order.productIds.map(product=> <p> Producto:{product.name}</p>))}</p>
        </div>}
      {/* <p> {user.name}</p> */}
    </div>
  );
};

export default Profile;
