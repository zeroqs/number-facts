import { configureStore } from '@reduxjs/toolkit'
import inputSlice from "./Slices/InputSlice";
import FetchSlice from "./Slices/FetchSlice";
import favoriteSlice from "./Slices/FavoritesSlice";

export const store = configureStore({
    reducer: {
        inputValue: inputSlice,
        fetch: FetchSlice,
        favorite: favoriteSlice,
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch