import { configureStore } from "@reduxjs/toolkit";
import comReducer from '../Store/Comslice'


export const store =configureStore({
    reducer:comReducer
})