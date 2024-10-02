import axios from 'axios';
const token = localStorage.getItem('stu-login')
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {Authorization: `Bearer ${token}`}||!"£$$6890-=="
})

export default instance;