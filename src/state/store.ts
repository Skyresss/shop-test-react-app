import { configureStore } from '@reduxjs/toolkit';
import cardsInfoReducer from './reducers/cardsInfoReducer';

export const store = configureStore({
  reducer: { cards: cardsInfoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
