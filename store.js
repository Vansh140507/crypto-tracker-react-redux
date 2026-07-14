import { configureStore } from "@reduxjs/toolkit";
import sliceReducer  from "./slicer";
const store = configureStore({
    reducer:{
        slicer:sliceReducer,

    }
})

export default store;
