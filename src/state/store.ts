import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import assetReducer from './assetsSlice';
import tickersReducer from './tickersSlice';

const reducer = combineReducers({
   asset: assetReducer,
   tickers: tickersReducer,
})

export  const store = configureStore({reducer: reducer})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;