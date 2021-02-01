import { configureStore } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch } from 'react-redux';
import type { RootState } from 'reducers';
import rootReducer from 'reducers';
import type { Middleware } from 'redux';
import logger from 'redux-logger';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...middlewares],
});

export type AppDispatch = typeof store.dispatch;
export const useTypedSelector = createSelectorHook<RootState>();
export const useTypedDispatch = () => useDispatch<AppDispatch>();

export default store;
