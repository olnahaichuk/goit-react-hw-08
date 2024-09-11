
import css from "./AppBar/AppBar.module.css"
import { selectAuthUser } from "../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { apiLogOut } from "../redux/auth/operations";
import { useState } from "react";
import Modal from "./Modal/Modal";

const UserMenu = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(selectAuthUser);
    const handleLogOutClick = () => {
        setIsModalOpen(true);
    }
    const onLogOut = () => {
        dispatch(apiLogOut());
        setIsModalOpen(false);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
      <>
              <div>
                <p className={css.userInfo }>Hello, {user.name}!</p>
                <p className={css.userInfo }>Email: {user.email}</p>
               
              </div>
            <button
                type="button"
                className={`${css.link} ${css.logout}`
                } 
                onClick={handleLogOutClick}>Log Out</button>
            {isModalOpen && (<Modal  onConfirm={onLogOut } onClose={handleCloseModal} />)}
            </>
  )
}

export default UserMenu
