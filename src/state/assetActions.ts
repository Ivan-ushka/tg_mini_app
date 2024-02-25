import {fetchAssetFailure, fetchAssetStart, fetchAssetSuccess} from "./assetsSlice";
import Service from "../http/services";
import {AppThunk} from "./store";


export const fetchAsset = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchAssetStart());
        const response = await Service.getListAssets();
        dispatch(fetchAssetSuccess(response.data.messages));
    } catch (error: any) {
        dispatch(fetchAssetFailure(error.message));
    }
};