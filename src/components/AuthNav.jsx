import clsx from 'clsx'
import css from './AppBar/AppBar.module.css'
import { NavLink } from 'react-router-dom'

const AuthNav = () => {
  return (
  <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
  )
}

export default AuthNav
