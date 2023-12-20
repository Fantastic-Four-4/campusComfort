import { message } from "antd";
import React, { useEffect, useState } from "react";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Authforadmin({ children }) {
  const { user, adminToken, admin_loading, admin} = useSelector(
    (state) => state.user
  );
  // console.log(checkAuthLoading)
  // console.log(loading)
  // console.log(userToken)
  // console.log(user)





 



  // console.log(isAuthenticated)

 

  if (admin_loading)
    return (
      <h1 style={{ margin: "2rem", textAlign: "center" }}>
        <BiLoader/>
      </h1>
    );

  if ( !adminToken||admin===false||!adminToken) {
    return <Navigate to={"/admin-login"} />;
  }
  // if(is_staff!=='beta'){
  //   message.error('You Are Not Authorised')
  //   return <Navigate to={"/"} />;
  //   // return <></>;

  // }
  
  return <>{children}</>;
}

export default Authforadmin;
