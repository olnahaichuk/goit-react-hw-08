
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <Toaster/>
      </PersistGate>
      </Provider>
    </BrowserRouter>,
)
