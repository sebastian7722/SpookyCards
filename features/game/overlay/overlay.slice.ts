import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../redux/store';

interface IOverlayState {
  isVisible: boolean;
  title: string;
  subtitle?: string;
}

const initialState: IOverlayState = {
  isVisible: true,
  title: 'Click to start',
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
  },
});

export const {setVisibility, setTitle, setSubtitle} = overlaySlice.actions;

export const selectOverlay = (state: RootState) => state.overlay;

export default overlaySlice.reducer;
