import $api from "../http";
import Asset from "../interfaces/asset";

export default class Service{
    static async createAsset(data: Asset) {
        return $api.post('/assets', {data})
    }
}

