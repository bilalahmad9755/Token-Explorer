import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from './slice';
const store=configureStore
(
  {
    reducer: 
    {
     redux: reduxReducer,
    },
  }
)
export default store ;