import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:3002/api/materiel";

class MaterielService {
    getAll(){
        return axios.get(API_URL, { headers: authHeader() })
    }

    get(id){
        return axios.get(API_URL + `/${id}`, { headers: authHeader() })
    }

    create(data){
        return axios.post(API_URL, data, { headers: authHeader()})
    }

    findBynomMaterial(nomMateriel){
        return axios.get(API_URL + `?nomMateriel=${nomMateriel}`)
    }
}

export default new MaterielService();