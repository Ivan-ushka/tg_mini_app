import axios from 'axios'

export const API_URL = `https://18.130.38.160.nip.io`;

const $api = axios.create({
    baseURL: API_URL
})
export default $api;



