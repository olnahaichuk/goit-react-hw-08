import { NavLink } from "react-router-dom"
import css from './AppBar/AppBar.module.css'
import clsx from "clsx"

const Navigation = () => {
    return (
      <>
      <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
            </NavLink>
        </>
  )
}

export default Navigation
