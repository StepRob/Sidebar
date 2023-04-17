import { configureStore } from '@reduxjs/toolkit'
import selectItem from './slices/selectItem'

export const store = configureStore({
    reducer: {
        item: selectItem
    },
})