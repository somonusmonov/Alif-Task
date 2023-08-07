import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUser",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API}/${id}`);
      dispatch(getUsers());
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addUser = createAsyncThunk(
  "users/addUsers",
  async function (newUser, { rejectWithValue, dispatch }) {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API}`, newUser)
      dispatch(getUsers());
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
