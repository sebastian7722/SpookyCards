import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../redux/store';

interface ICardState {
  isAnimating: boolean;
  isFront: boolean;
}

const initialState: ICardState = {
  isAnimating: false,
  isFront: false,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setIsAnimating: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
    },
    setIsFront: (state, action: PayloadAction<boolean>) => {
      state.isFront = action.payload;
    },
  },
});

export const {setIsFront, setIsAnimating} = cardSlice.actions;

export const selectCard = (state: RootState) => state.card;

export default cardSlice.reducer;
