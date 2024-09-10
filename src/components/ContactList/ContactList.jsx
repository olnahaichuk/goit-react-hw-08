import css from './ContactList.module.css'
import Contact from "../Contact/Contact"; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {  selectFilteredContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';


const ContactList = () => {
  const dispatch = useDispatch();
  

  const filter = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId).unwrap().then(() => {
      toast.success("Contact deleted successfully")
    }
      
    ));

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
