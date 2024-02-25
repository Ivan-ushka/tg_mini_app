import Service from "../http/services";
import {AppThunk} from "./store";
import {fetchTickersFailure, fetchTickersStart, fetchTickersSuccess} from "./tickersSlice";


export const fetchTickers = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchTickersStart());
        const response = await Service.getTickers();
        dispatch(fetchTickersSuccess(response.data.tickers));
    } catch (error: any) {
        dispatch(fetchTickersFailure(error.message));
    }
};