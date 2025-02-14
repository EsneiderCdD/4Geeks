import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyecto-final-backend-fawn.vercel.app', 
});

export default instance;
