import { createSlice } from "@reduxjs/toolkit";

const ShowPopUpSlice=createSlice({
  name : "popUp",
  initialState :{
    loginPopup : false,
    Forgetpass : false,
    changed : false,
    profile :false,
    calldetail : false,
    rate : false,
    approve : false,
    email : false,
    booking : false
  },
  reducers :{
    setLoginpopup : (state)=>{
           state.loginPopup= true
    },
    removeLoginpopup : (state)=>{
           state.loginPopup= false
    },
      setpass : (state)=>{
           state.Forgetpass= true
    },
    removepass : (state)=>{
           state.Forgetpass= false
    },
        setChange : (state)=>{
           state.changed= true
    },
    removeChange : (state)=>{
           state.changed= false
    },
    setProfile : (state)=>{
           state.profile= true
    },
    removeProfile : (state)=>{
           state.profile= false
    },
    setCall :(state)=>{
       state.calldetail =true
    },
    removecall : (state)=>{
       state.calldetail =false
    },
    setRate :(state)=>{
       state.rate =true
    },
    removeRate : (state)=>{
       state.rate =false
    },
    setApprove :(state)=>{
       state.approve =true
       
    },
    removeApprove : (state)=>{
       state.approve =false
    },
    setEmail :(state)=>{
       state.email =true
       
    },
    removeEamil : (state)=>{
       state.email =false
    },
    setBooking :(state)=>{
       state.booking =true
       
    },
    removeBooking : (state)=>{
       state.booking =false
    }
  }
})

export const popUpSliceReducer=ShowPopUpSlice.reducer;
export const { setEmail ,removeEamil , setCall, removecall, setLoginpopup ,removeLoginpopup , setpass ,setChange , removeChange, removepass , setProfile , setBooking , removeBooking , removeProfile , setRate ,removeRate, setApprove , removeApprove} = ShowPopUpSlice.actions