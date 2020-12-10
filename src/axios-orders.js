import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-66f3e.firebaseio.com/'
});

export default instance;