import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = '694e1015c577e6802d8f0e4f00ea92ef';
const API_BASE_URL = 'https://financialmodelingprep.com/api/v3/';
const API_SYMBOL_EXT = 'financial-statement-symbol-lists';

const fetchStockSymbols = createAsyncThunk(
  'stocks/getchStockSymbols',
  async () => {
    const response = await axios.get(`${API_BASE_URL}${API_SYMBOL_EXT}?apikey=${API_KEY}`);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  stocks: [],
  loading: true,
  error: null,
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockSymbols.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.stocks = action.payload;
    })
  }
});

export { fetchStockSymbols };

export default stockSlice.reducer;