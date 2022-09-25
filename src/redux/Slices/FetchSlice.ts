import { createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

import {ServerResponse} from "../../models/models";

export interface NumState {
    loading: boolean;
    error: string;
    data: string[];
}

const initialState: NumState = {
    loading: false,
    error: '',
    data: [],
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
            state.data.push(action.payload)

        },
        fetchingError(state, action : PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    },

})

export const { fetching,fetchingSuccess,fetchingError } = FetchSlice.actions

export default FetchSlice.reducer



