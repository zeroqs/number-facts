import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ClickableInputOrButton} from "@testing-library/user-event/utils/click/isClickableInput";

export interface ButtonState {
    type: string;
}

const initialState: ButtonState = {
    type: '',
}

export const ButtonSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        buttonClick(state, action : PayloadAction<any>) {
            state.type = action.payload
        }
    },
})

export const { buttonClick } = ButtonSlice.actions

export default ButtonSlice.reducer

