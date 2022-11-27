import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../redux/store';

interface IStatisticsState {
  time: number;
  flips: number;
}

const initialState: IStatisticsState = {
  time: 120,
  flips: 0,
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    decrementTime: state => {
      state.time -= 1;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    incrementFlips: state => {
      state.flips += 1;
    },
    setFlips: (state, action: PayloadAction<number>) => {
      state.flips = action.payload;
    },
  },
});

export const {incrementFlips} = statisticsSlice.actions;

export const selectStatistics = (state: RootState) => state.statistics;

export default statisticsSlice.reducer;
