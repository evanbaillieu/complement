import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3002/api/salle";

class SalleService {
    getAll(){
        return axios.get(API_URL, { headers: authHeader() })
    }

    get(id){
        return axios.get(API_URL + `/${id}`, { headers: authHeader() })
    }

    create(data){
        return axios.post(API_URL, data, { headers: authHeader()})
    }

    delete(id){
        return axios.delete(API_URL+`/${id}`, {headers: authHeader()})
    }
    deleteAll(){
        return axios.delete(API_URL, {headers: authHeader()})
    }

}

export default new SalleService();