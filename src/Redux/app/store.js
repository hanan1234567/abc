import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formularyReducer from '../features/formulary/formularySlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formulary:formularyReducer,
  },
});
