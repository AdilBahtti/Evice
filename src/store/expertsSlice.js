import { createSlice } from "@reduxjs/toolkit";
import { experts } from "../DataFolder/data";
import { act } from "react";
    const tempArr=[]
const expertsSlice = createSlice({
  name: "experts",
  initialState: {
    experts: experts,
    requested: [],
    expertsCount: 0,
    categorySearch: [],
    Fav :[],
    profile :{}
  },
  reducers: {
    count: (state, action) => {
      const search = action.payload.input.toLowerCase();
      let matches = state.experts.filter((e) => {
        return e.category.toLowerCase().includes(search);
      });
      state.expertsCount = matches.length;
    },

    request: (state, action) => {
      state.requested = state.experts.filter((e) => {
        return e.category.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    all: (state) => {
      state.categorySearch = state.experts;
    },
    getProfile : (state , action)=>{
          
        state.profile = state.experts.find((p) => p.id == action.payload);

        console.log(state.profile)
    },

    photoGrapher: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("photographer")
      );
    },
addFav: (state, action) => {
  const expert = state.experts.find(e => e.id === action.payload.id);
  if (expert && !state.Fav.some(f => f.id === expert.id)) {
    state.Fav = [...state.Fav, { ...expert }]; // clone and create new array
  }

  console.log(state.Fav)
}

,

    sportsman: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("sportsman")
      );
    },

    musician: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("musician")
      );
    },

    teacher: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("teacher")
      );
    },

    designer: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("designer")
      );
    },

    businessConsultant: (state) => {
      state.categorySearch = state.experts.filter((e) =>
        e.category.toLowerCase().includes("business consultant")
      );
    },
  },
});

export const expertsReducer = expertsSlice.reducer;
export const {
  getProfile,
  count,
  request,
  all,
  addFav,
  photoGrapher,
  sportsman,
  musician,
  teacher,
  designer,
  businessConsultant,
} = expertsSlice.actions;
