import { getHomeGoodPriceData } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recomendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
