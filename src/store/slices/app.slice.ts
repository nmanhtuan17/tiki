import {createSlice} from "@reduxjs/toolkit";
import {getAllBooks} from "../actions/app.action.ts";

export interface IBook {
  id: number;
  categories?: any;
  description?: string;
  images?: any;
  list_price: number;
  name: string;
  original_price: number;
  isHidden: boolean;
  rating_average: number;
  quantity_sold: {
    text: string,
    value: number
  }
}
export interface AppSliceState {
  isLoading?: boolean,
  message?: string,
  books: IBook[]
}

const initialState: AppSliceState = {
  isLoading: false,
  message: '',
  books: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false;
      })

})