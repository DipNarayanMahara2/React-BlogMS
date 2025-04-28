import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/statuses"
import API from "../https";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setStatus, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;

export function register(data) {
  return async function registerThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const response = await API.post("register",data);
      if (response.status === 200) {
        dispatch(setStatus.SUCCESS)
        dispatch(setUser(data))
      }
    } catch (error) {
      dispatch(setStatus.ERROR)
    }
  };
}

export function login(data) {
  return async function loginThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post(
        "login",
        data
      );
      if (response.status === 200 && response.data.token) {
        dispatch(setToken(response.data.token))
        dispatch(setStatus.SUCCESS);
      }
    } catch (error) {
      dispatch(setStatus.ERROR);
    }
  };
}
