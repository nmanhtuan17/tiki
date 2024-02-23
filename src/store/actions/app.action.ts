import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBooks = createAsyncThunk('app/getAll-book', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get('https://86yfl7-8080.csb.app/books');
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue(e);
  }
})



