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
        value:{},
        isUpdate:true
    },
    reducers:{
        userAllData:(state,action)=>{


            state.value = action.payload
        },
         getUserDataUpdationTrigger:(state)=>{
            state.isUpdate = !state.isUpdate
        }
    }
})


const filterDataSlice = createSlice({
    name:"filterDataSlice",
    initialState:{
        value:{
            subcategory:"",
            pricerange:[100,60000],
            rating:3.5 
        },
        isUpdate:true
    },
    reducers:{
        getFilterData:(state,action)=>{
            state.value = action.payload;

        },
        getFilterDataUpdationTrigger:(state)=>{
            state.isUpdate = !state.isUpdate
        }
    }
})
export const {getCategorySlice} = categorySlice.actions;
export const {login,logout} = loggedInOutSlice.actions;
export const {userAllData,getUserDataUpdationTrigger} = userData.actions;
export const {getFilterData,getFilterDataUpdationTrigger} = filterDataSlice.actions;
export const categorySlicia =  categorySlice.reducer;
export const loggedInOutSlicia = loggedInOutSlice.reducer
export const userDataSlicia = userData.reducer
export const filterDataSlicia = filterDataSlice.reducer;