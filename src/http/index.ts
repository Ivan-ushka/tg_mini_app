import axios from 'axios'

export const API_URL = `http://13.42.5.22:8080/`;

const $api = axios.create({
    baseURL: API_URL
})
export default $api;



