import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import clsx from "clsx"
import { useSelector } from "react-redux";
import { selectAuthLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
    return (
      <nav className={css.wrapper}>
      <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
        </NavLink>
        { isLoggedIn && ( <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/contacts"
          >
            Contacts
        </NavLink>) }
        </nav>
  )
}

export default Navigation
