import { createSlice } from '@reduxjs/toolkit'
import { experts } from '../DataFolder/data'
const SetupProfSlice = createSlice({
  name: "SetupProf",
  initialState: {
    experts: experts,
    currObj: {}
  },
  reducers: {
    PersonInfo: (state, action) => {
      state.currObj =
      {
        id: Date.now().toString(),
        name: action.payload.username,
        category: action.payload.profession,
        profileImage: action.payload.avatar,
        location: { city: action.payload.city, country: action.payload.country },
        age: action.payload.age,
        socialMedia: { facebook: action.payload.facebook, instagram: "#", twitter: action.payload.twitter },
        experience: { title: "Experience", description: action.payload.experience },
        bio: { title: "Bio", description: action.payload.about },
        Phone: action.payload.Phone,
        skills: action.payload.skills
          ? action.payload.skills.split("#").map(s => s)
          : []
      }
    },
    Bookingrates: (state, action) => {
      state.currObj = {
        ...state.currObj,
        bookingRates: [
          { type: "Audio Call", price: action.payload.voiceSingle, unit: "Per Single Participant/Min" },
          { type: "Audio Call", price: action.payload.voiceMultiple, unit: "Per Group/Min" },
          { type: "Video Call", price: action.payload.videoSingle, unit: "Per Single Participant/Min" },
          { type: "Video Call", price: action.payload.videoMultiple, unit: "Per Group/Min" }
        ]
      }
    },
    Payment: (state, action) => {
      state.currObj = {
        ...state.currObj,
        cardInfo: {
          cardName: action.payload.cardName,
          cardNumber: action.payload.cardNumber,
          expiry: action.payload.expiry,
          cvc: action.payload.cvc
        }
      }
          state.experts=[...state.experts , state.currObj]
          state.currObj={}          
    }
  }
})
export const SetupReduce = SetupProfSlice.reducer
export const { PersonInfo, Bookingrates , Payment } = SetupProfSlice.actions