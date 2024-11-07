import { createSlice } from "@reduxjs/toolkit";

// 카운트 슬라이스 내보내기

export const counterSlice = createSlice( {
  name: 'counterSlice',
  initialState: {num: 0 },

  reducers: {
    up: (state, action) => {
    console.log(action);
      state.num = state.num + action.payload

    } 
  }
});