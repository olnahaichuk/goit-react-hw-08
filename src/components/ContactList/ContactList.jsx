import css from './ContactList.module.css'
import Contact from "../Contact/Contact"; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import {  selectFilteredContacts } from '../../redux/contacts.selectors';


const ContactList = () => {
  const dispatch = useDispatch();
  

  const filter = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));

  }

  
  return (
    <div className={css.contactList}>
      {filter.length > 0 ?  (filter.map(contact =>
          (<Contact key={contact.id}
            contact={contact}
        onDeleteContact={handleDeleteContact} />))
           ) :
            <p>No contacts availible</p>}
         
    
    </div>
  )
}

export default ContactList
