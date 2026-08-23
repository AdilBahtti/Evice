import {configureStore} from "@reduxjs/toolkit"
 import { themeToggleReducer } from "./themeToggleSlice";
 import { expertsReducer } from "./expertsSlice";
 import { popUpSliceReducer } from "./ShowPopUpSlice";
 import { SetupReduce } from "./SetupProfSlice";
 import {multipleReduce} from './multipleCallSlice'
const store=configureStore({
  reducer:{
       themeToggle : themeToggleReducer,
       experts : expertsReducer,
         popUp : popUpSliceReducer,
        SetupProf : SetupReduce  ,
        multiple : multipleReduce 
  }
})

export default store;