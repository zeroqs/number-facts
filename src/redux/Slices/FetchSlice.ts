import {createSlice, current} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'



export interface NumState {
    loading: boolean;
    error: string;
    data: any[];
}

const initialState: NumState = {
    loading: false,
    error: '',
    data: [],
}

function isInArray(id:any, arr:any) {
    if (arr.some((e:any) => e.id === id)) {
        return true;
    }
    return false;
}

export const FetchSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchingSuccess(state, action) {
            state.loading = false
            state.data.push({
                "fact":action.payload,
                "isFavorite": false,
            })

        },
        fetchingError(state, action : PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        toggleFavorite(state,action) {
            console.log(current(state.data))
            state.data.forEach((post)=>post.fact===action.payload.fact?post.isFavorite=!action.payload.isFavorite:post.isFavorite=post.isFavorite)
        }
    },

})

export const { fetching,fetchingSuccess,fetchingError,toggleFavorite } = FetchSlice.actions

export default FetchSlice.reducer



