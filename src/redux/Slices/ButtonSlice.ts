import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ButtonState {
    value: string;
}

const initialState: ButtonState = {
    value: '',
}

export const ButtonSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        addValue(state, action : PayloadAction<any>) {
            state.value = action.payload
        }
    },
})

export const { addValue } = ButtonSlice.actions

export default ButtonSlice.reducer

