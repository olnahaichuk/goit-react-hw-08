import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Contact = ({ contact}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
    
  }
  const handleConfirmDelete = () => {
      dispatch(deleteContact(contact.id)).unwrap().then(() => {
        toast('Contact deleted',
  {
    icon: '🚯',
    style: {
      borderRadius: '10px',
      fontSize:'25px',
      background: '#333',
      color: '#fff',
    },
   
  }
);
      })
    setIsModalOpen(false);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
      <div className={css.contactWrapper}>
          <div>
        <FaUser className={ css.icon} />
             <FaPhoneAlt className={ css.icon}  />
          </div>
          <div>
             
              <p>{contact.name}</p>
              <p>{contact.number}</p>
          </div>
      <button className={css.deleteBtn} type="button" onClick={handleDeleteClick}>Delete</button>
      {isModalOpen && (<Modal onClose={handleCloseModal } onConfirm={handleConfirmDelete} />)}
    </div>
  )
}

export default Contact
