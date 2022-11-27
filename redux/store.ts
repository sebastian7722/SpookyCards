import {configureStore} from '@reduxjs/toolkit';
import overlayReducer from '../features/game/overlay/overlay.slice';
import statisticsReducer from '../features/game/statistics/statistics.slice';
import cardReducer from '../features/game/card/card.slice';

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    statistics: statisticsReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
