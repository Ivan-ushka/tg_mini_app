import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TickersState {
    tickers: string[];
    loading: boolean;
    error: string | null;
}

const initialState: TickersState = {
    tickers: [],
    loading: false,
    error: null,
};

const tickersSlice = createSlice({
    name: "tickers",
    initialState,
    reducers: {
        fetchTickersStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTickersSuccess: (state, action: PayloadAction<string[]>) => {
            state.tickers = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchTickersFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTickersStart, fetchTickersSuccess, fetchTickersFailure } =
    tickersSlice.actions;

export default tickersSlice.reducer;