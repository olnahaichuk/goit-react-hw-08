import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css'
import { selectContacts } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
   useEffect(() => {
     dispatch(fetchContacts())
   }, [dispatch])
  
  return (
 <div className='wrapper'>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      {Array.isArray(contacts) && <ContactForm />}
      <SearchBox />
   <ContactList  />
   
 </div>
  )
}

export default ContactsPage
