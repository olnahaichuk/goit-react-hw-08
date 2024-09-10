import { useSelector } from "react-redux"
import {  selectAuthLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
    const isLoggedIn = useSelector(selectAuthLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
}


