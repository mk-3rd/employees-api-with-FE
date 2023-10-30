import { createSlice } from '@reduxjs/toolkit';

export const tribeSlice = createSlice({
    name: "tribes",
    initialState: {
        tribesList: [],
        success: false,
        loading: true,
    },
    reducers: {
        loading: (state) => {
            state.loading = true;
        },

        fetchTribes: (state, action) => {
            state.tribesList = action.payload;
            state.loading = false;

        },

        fetchTribesError:  (state) => {
            state.tribesList = [];
            state.loading = false;
        },
    }
})

export const {loading, fetchTribes, fetchTribesError} = tribeSlice.actions;

export default tribeSlice.reducer;