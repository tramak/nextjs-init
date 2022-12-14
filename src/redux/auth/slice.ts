import { createSlice } from '@reduxjs/toolkit';
import { IAuth } from './interfaces';

const initialState: IAuth.State = {};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens(state, action: IAuth.SetTokensAction) {
            state.tokens = action.payload;
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            localStorage.setItem('accessToken', action.payload.accessToken);
        },
        removeTokens(state) {
            state.tokens = undefined;
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
        },
    },
});

export const { setTokens, removeTokens } = slice.actions;
export default slice.reducer;
