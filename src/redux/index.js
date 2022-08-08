import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reduser';
import gameReduser from './games/reduser';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gameReduser,
  },
});
