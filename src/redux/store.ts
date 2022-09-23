import { configureStore } from '@reduxjs/toolkit'
import inputSlice from "./Slices/InputSlice";
import buttonClick from "./Slices/ButtonSlice";
import FetchSlice from "./Slices/FetchSlice";

export const store = configureStore({
    reducer: {
        inputValue: inputSlice,
        buttonValue: buttonClick,
        fetch: FetchSlice,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch