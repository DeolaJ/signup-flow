import { configureStore } from '@reduxjs/toolkit';
import form from './reducers/form';
import user from './reducers/user';

export const store = configureStore({
  reducer: {
    form,
    user,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
