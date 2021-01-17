import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3002/api/type/';

class TypeService {
    getALl(){
        return axios.get(API_URL,)
    }

    getbyid(id){
        return axios.get(API_URL + `${id}`, { headers: authHeader() })
    }
}

export default new TypeService();