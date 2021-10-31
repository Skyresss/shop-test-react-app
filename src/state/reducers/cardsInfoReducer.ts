import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface cardInfo {
  name: string;
  category: string;
  price: number;
}

export interface cardsInfoState {
  cardsInfo: cardInfo[];
  status: 'pending' | 'fulfilled' | 'rejected';
  error: string | undefined;
}

const initialState: cardsInfoState = {
  cardsInfo: [
    {
      name: 'Apple Juice',
      category: 'vegetables',
      price: 6.39,
    },
  ],
  status: 'pending',
  error: undefined,
};

export const fetchCards = createAsyncThunk('cardsInfo/fetchCards', async () => {
  const response = await axios.get(
    'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e'
  );
  return response.data;
});

export const cardsInfoReducer = createSlice({
  name: 'cardsInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCards.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.cardsInfo = payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default cardsInfoReducer.reducer;
