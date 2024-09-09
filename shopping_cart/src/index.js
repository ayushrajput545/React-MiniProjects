import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './redux/store';
import { ToastContainer } from 'react-toastify';
import {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

 
   <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  

  

  </BrowserRouter>
   
);

 