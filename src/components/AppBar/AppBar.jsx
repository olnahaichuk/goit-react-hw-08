
import { selectAuthIsRefreshing, selectAuthLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css"

import AuthNav from "../AuthNav";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";

const AppBar = () => {
    const isLoggedIn = useSelector(selectAuthLoggedIn);

    const isRefreshing = useSelector(selectAuthIsRefreshing);
    
    if (isRefreshing) return <p>User is refreshing , please wait ..</p>
  
  return (
    <nav className={css.nav}>
          <Navigation/>
          {isLoggedIn ? (
           <UserMenu/>
          ) : (
           <AuthNav/>
          )}
        </nav>
  )
}

export default AppBar
