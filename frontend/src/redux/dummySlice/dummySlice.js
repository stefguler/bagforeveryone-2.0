import {createSlice} from "@reduxjs/toolkit";

export const dummySlice=createSlice({
    name:"dummy",
    initialState:{
        value:0
    },
    reducers:{
        setDummy:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {setDummy} = dummySlice.actions;
export default dummySlice.reducer;