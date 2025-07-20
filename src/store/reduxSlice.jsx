import {createSlice} from "@reduxjs/toolkit"

const categorySlice = createSlice({
    name:"categoryslice",
    initialState:{
        value:"Fashion"
    },
    reducers:{
        getCategorySlice : (state,action)=>{
           state.value = action.payload
        }
    }
})

const loggedInOutSlice = createSlice({
    name:"loggedInOutSlice",
    initialState:{
        value:false
    },
    reducers:{
        login:(state)=>{
            state.value = true
        },
        logout:(state)=>{
            state.value = false
        }
    }
})


export const {getCategorySlice} = categorySlice.actions;
export const {login,logout} = loggedInOutSlice.actions;
export const catgorySlicia =  categorySlice.reducer;
export const loggedInOutSlicia = loggedInOutSlice.reducer