import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://87.107.134.134:5000/api'
});

export default instance;