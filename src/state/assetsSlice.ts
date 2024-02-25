import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getAsset} from "../interfaces/asset";

interface AssetState {
    listAssets: getAsset[];
    previousListAssets: getAsset[];
    loading: boolean;
    error: string | null;
}

const initialState: AssetState = {
    listAssets: [],
    previousListAssets: [],
    loading: false,
    error: null,
};

const assetSlice = createSlice({
    name: 'asset',
    initialState,
    reducers: {
        fetchAssetStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAssetSuccess: (state, action: PayloadAction<getAsset[]>) => {
            state.previousListAssets = state.listAssets; // Сохранение предыдущих данных
            state.listAssets = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchAssetFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchAssetStart, fetchAssetSuccess, fetchAssetFailure } = assetSlice.actions;

export default assetSlice.reducer;