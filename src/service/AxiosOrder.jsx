import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // headers: {Authorization: `Bearer ${token}`}||!"£$$6890-=="
})

export default instance;