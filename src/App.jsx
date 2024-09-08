import {  Suspense, useEffect , lazy} from 'react';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';
import css from "./App.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts } from './redux/contacts.selectors';
import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import { selectAuthIsRefreshing, selectAuthLoggedIn, selectAuthUser } from './redux/auth/selectors';
import { apiRefreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
  
  
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const user = useSelector(selectAuthUser);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  

  
  const contacts = useSelector(selectContacts);
 
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  useEffect(() => {
    dispatch(apiRefreshUser())
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]);
  
  if (isRefreshing) return <p>User is refreshing , please wait ..</p>
  
  return (
    <div>
       <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
             
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              <div>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
            </>
          ) : (
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
          )}
        </nav>
      </header>
      <main>
 <Suspense fallback="Loading ...">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/contacts" element={<ContactsPage/> } />
</Routes>
 </Suspense>
      </main>
      <footer>
        Footer Content
      </footer>
      
   

</div>
//     <div className='wrapper'>
//      <h1>Phonebook</h1>
//     <ContactForm />
//     <SearchBox />
//       <ContactList  />
// </div>
  )
}

export default App
