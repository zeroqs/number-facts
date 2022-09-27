import {createSlice, current} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'



export interface NumState {
    loading: boolean;
    error: string;
    data: any[];
    favorite: any[];
}

const initialState: NumState = {
    loading: false,
    error: '',
    data: [],
    favorite: [],
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
            state.data.forEach((post)=> {
                if (post.fact===action.payload.fact) {
                    post.isFavorite=!action.payload.isFavorite
                    if (post.isFavorite) {
                        state.favorite.push(post.fact)
                    } else {
                        state.favorite = state.favorite.filter((item) => item!==action.payload.fact)
                    }
                }
            })
        }
    },

})

export const { fetching,fetchingSuccess,fetchingError,toggleFavorite } = FetchSlice.actions

export default FetchSlice.reducer



