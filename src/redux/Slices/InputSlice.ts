import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
    value: string;
}

const initialState: InputState = {
    value: '',
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        addValue(state, action : PayloadAction<any>) {
            state.value = action.payload
        }
    },
})

export const { addValue } = inputSlice.actions

export default inputSlice.reducer

