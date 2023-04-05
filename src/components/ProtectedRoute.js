import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const location = useLocation();
    let {user} = useUserAuth();
 
    if (user === undefined) {
        return null;
    }
   
    return user
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}
export default ProtectedRoute;