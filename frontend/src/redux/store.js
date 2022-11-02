import {configureStore} from "@reduxjs/toolkit";
import dummyReducer from "./dummySlice/dummySlice"
const Store = configureStore({
    reducer: {
        dummy:dummyReducer
    }
})

export default Store