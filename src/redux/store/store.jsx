import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "../reducers/mainSlice.jsx";


const store = configureStore({
    reducer: {
        mainSlice
    }
})

export default store