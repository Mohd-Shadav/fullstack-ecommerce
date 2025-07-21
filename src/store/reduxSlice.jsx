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


const userData = createSlice({
    name:"userData",
    initialState:{
        value:{}
    },
    reducers:{
        userAllData:(state,action)=>{


            state.value = action.payload
        }
    }
})

export const {getCategorySlice} = categorySlice.actions;
export const {login,logout} = loggedInOutSlice.actions;
export const {userAllData} = userData.actions;
export const categorySlicia =  categorySlice.reducer;
export const loggedInOutSlicia = loggedInOutSlice.reducer
export const userDataSlicia = userData.reducer