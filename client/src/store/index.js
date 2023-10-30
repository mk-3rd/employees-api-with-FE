import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeSlice from './slices/employeeSlice';
import tribeSlice from './slices/tribeSlice';
import thunk from 'redux-thunk';


const myCustomMiddleware = store => next => action => {
  return next(action);
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});


const middleware = [...customizedMiddleware, thunk, myCustomMiddleware];

export default configureStore({
  reducer: {
    employees: employeeSlice,
    tribes: tribeSlice,
  },
  middleware,
});