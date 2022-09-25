import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ButtonState {
    type: string;
}

const initialState: ButtonState = {
    type: '',
}

export const ButtonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        buttonClick(state, action : PayloadAction<any>) {
            state.type = action.payload
            console.log(action.payload)
        }
    },
})

export const { buttonClick } = ButtonSlice.actions

export default ButtonSlice.reducer

