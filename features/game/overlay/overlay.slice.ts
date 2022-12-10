import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../redux/store';

interface IOverlayState {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  time: number;
}

const initialTime: number = 100;

const initialState: IOverlayState = {
  isVisible: true,
  title: 'Click to start',
  time: initialTime,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSubtitle: (state, action: PayloadAction<string | undefined>) => {
      state.subtitle = action.payload;
    },
    decrementTime: state => {
      state.time -= 1;

      if (state.time < 0) {
        state.isVisible = true;
        state.title = 'GAME OVER';
        state.subtitle = 'Click to restart';
        state.time = initialTime;
      }
    },
    setVictory: state => {
      state.isVisible = true;
      state.title = 'VICTORY';
      state.subtitle = 'Click to restart';
      state.time = initialTime;
    },
  },
});

export const {setVisibility, setTitle, setSubtitle, decrementTime, setVictory} =
  overlaySlice.actions;

export const selectOverlay = (state: RootState) => state.overlay;
export const selectTime = (state: RootState) => state.overlay.time;
export const selectIsOverlayVisible = (state: RootState) =>
  state.overlay.isVisible;

export default overlaySlice.reducer;
