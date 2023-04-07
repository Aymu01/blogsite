import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userData from '../api/blogSlice/blogSlice'
import storage from "redux-persist/lib/storage";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";  
//import userData

import 'primeflex/primeflex.css'


export const store = configureStore({
  reducer: {
    userDataFunc: userData
  }
});

export default store;



