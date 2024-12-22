import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../store/features/taskSlice'

export const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})