import {  useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts } from './redux/contacts.selectors';



function App() {
  const dispatch = useDispatch();

  
  const contacts = useSelector(selectContacts);
 
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]);
  
  return (
    <div className='wrapper'>
     <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
      <ContactList  />
</div>
  )
}

export default App
