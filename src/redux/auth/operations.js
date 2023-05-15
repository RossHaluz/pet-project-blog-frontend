import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
