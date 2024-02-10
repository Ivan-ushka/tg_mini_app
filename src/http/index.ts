import axios from 'axios'

export const API_URL = `http://54.208.32.32:8001/`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
export default $api;