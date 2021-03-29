//this is for adding an API to the FrontEnd (remember our API is fake)
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})