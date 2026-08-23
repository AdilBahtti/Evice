import { createSlice } from "@reduxjs/toolkit";

const  themeToggleSlice=createSlice({
  name : "themeToggle",
  initialState : {
    toggle : false,
    navToggle :false
  },
  reducers:{
    light : (state)=>{
      state.toggle= false;

    },
    dark : (state)=>{
      state.toggle= true;
    },
    navDark :(state)=>{
         state.navToggle = true;
    },
    navLight :(state)=>{
        state.navToggle = false;

    }


  }

})
export const themeToggleReducer = themeToggleSlice.reducer;
export const {light , dark , navDark , navLight} = themeToggleSlice.actions