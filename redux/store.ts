import {configureStore} from '@reduxjs/toolkit';
import overlayReducer from '../features/game/overlay/overlay.slice';
import cardsReducer from '../features/game/cards/cards.slice';

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
