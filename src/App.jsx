import {   useEffect , lazy} from 'react';


import { useDispatch, useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';

import { apiRefreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout';


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
  
  
function App() {
  const dispatch = useDispatch();
const isRefreshing = useSelector(selectAuthIsRefreshing);
 

  useEffect(() => {
    dispatch(apiRefreshUser())
  },[dispatch])


  

  return isRefreshing ? (<b>Refreshing user...</b>) : (
    <div>
       
      
   
     <Layout>
 
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute component ={<RegisterPage/>} />} />
          <Route path="/login" element={<RestrictedRoute component ={<LoginPage/>}/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/> } /> } />
</Routes>
</Layout>
      
     
      
   

</div>
  )
}

export default App
