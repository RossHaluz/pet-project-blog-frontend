import { createSlice } from '@reduxjs/toolkit';
import * as AuthOperetions from './operations';

// const initialState = {
//   user: { password: null, email: null },
//   token: null,
//   isUserLogin: false,
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, password: null, email: null },
    token: null,
    isUserLogin: false,
  },
  extraReducers: {
    [AuthOperetions.login.fulfilled](state, action) {
      state.user = action.payload.user;
      console.log(action.payload);
      state.token = action.payload.token;
      state.isUserLogin = true;
    },
    [AuthOperetions.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isUserLogin = true;
    },
  },
});

export default authSlice.reducer;
