import axios from 'axios';

const userapi=axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

export default userapi;