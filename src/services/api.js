import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cornos.herokuapp.com/'
});

export default api;