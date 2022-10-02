import {createSlice, current} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'



export interface NumState {
    loading: boolean;
    error: string;
    data: any[];
    favorite: any[];
}
const data = localStorage.getItem('data');
const favorite = localStorage.getItem('data');


const initialState: NumState = {
    loading: false,
    error: '',
    data: data !== null ? JSON.parse(data) : [],
    favorite:  favorite !== null ? JSON.parse(favorite) : [],
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
            const temp = {
                "fact":action.payload,
                "isFavorite": false,
            }
            state.data.push(temp)
            localStorage.setItem('data',JSON.stringify(state.data))
        },
        fetchingError(state, action : PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
        toggleFavorite(state,action) {
            state.data.forEach((post)=> {
                if (post.fact===action.payload.fact) {
                    post.isFavorite=!action.payload.isFavorite
                }

            })
            localStorage.setItem('data',JSON.stringify(state.data))
            state.favorite = state.data.filter((post) =>
                (post.isFavorite) && !(state.favorite.includes(post.fact))
            )
            localStorage.setItem('favorite',JSON.stringify(state.favorite))
        }
    },

})

export const { fetching,fetchingSuccess,fetchingError,toggleFavorite } = FetchSlice.actions

export default FetchSlice.reducer



