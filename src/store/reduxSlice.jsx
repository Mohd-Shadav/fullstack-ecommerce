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


export const {getCategorySlice} = categorySlice.actions;
export default categorySlice.reducer;
// export const categoryS = categorySlice.reducer