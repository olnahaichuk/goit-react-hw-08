import { useSelector } from "react-redux"
import {  selectAuthLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
    const isLoggedIn = useSelector(selectAuthLoggedIn);
    return isLoggedIn ? component : <Navigate to={redirectTo} replace /> ;
}


