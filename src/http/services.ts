import $api from "../http";
import Asset from "../interfaces/asset";

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
export default class Service{
    static async createAsset(data: Asset) {
        return $api.post('/asset?data_check_string=erfvd&telegram_user_id=1&received_hash=erfve', data)
    }

    static async getListAssets() {
        return $api.get('/assets/?data_check_string=erfvd&telegram_user_id=1&received_hash=erfve')
    }

    static async getCurrencies() {
        return $api.get('/currencies?data_check_string=erfvd&telegram_user_id=1&received_hash=erfve', requestOptions)
    }

    static async getTickers() {
        return $api.get('/tickers/?data_check_string=erfvd&telegram_user_id=1&received_hash=erfve', requestOptions)
    }


}

