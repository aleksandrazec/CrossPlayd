import axios from 'axios';
import env from "dotenv";

env.config();
    
const api=axios.create({
    baseURL: 'https://api.igdb.com/v4',
    withCredentials: true,
    headers: {        'Client-ID': `${process.env.CLIENT_ID}`,
                'Authorization': `${process.env.AUTHORIZATION}`}
})

export default api;