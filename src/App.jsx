import {  Suspense, useEffect , lazy} from 'react';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './redux/contacts/selectors';
import {  Route, Routes } from 'react-router-dom';

import { apiRefreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import UserMenu from './components/AppBar/AppBar';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
  
  
function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(apiRefreshUser())
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]);
  

  return (
    <div>
       <header>
       <UserMenu/>
      </header>
      <main>
 <Suspense fallback="Loading ...">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute component ={<RegisterPage/>} />} />
          <Route path="/login" element={<RestrictedRoute component ={<LoginPage/>}/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } /> } />
</Routes>
 </Suspense>
      </main>
      <footer>
    
      </footer>
      
   

</div>
  )
}

export default App
