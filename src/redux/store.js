import {configureStore} from '@reduxjs/toolkit'
import ligandReducer from './createSlice'


export const store = configureStore({
    reducer : {
ligands : ligandReducer,
    }
})