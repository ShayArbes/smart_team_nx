import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './app/redux/slices/userSlice.js';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
