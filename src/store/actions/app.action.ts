import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBooks = createAsyncThunk('getAll-book', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get('https://h5ltj4-8080.csb.app/books');
    return data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e);
  }
})
