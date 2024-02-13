import axios from 'axios'

export const API_URL = `http://54.208.32.32:8080`;

const $api = axios.create({
    baseURL: API_URL
})
export default $api;



