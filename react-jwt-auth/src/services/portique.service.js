import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3002/api/potique/';

class portiqueService {
    getportiqueAll(){
        return axios.get(API_URL + '', { headers: authHeader() })
    }

    getportiqueOne(id){
        return axios.get(API_URL + `${id}`, { headers: authHeader() })
    }
    setportique(x, y, idSalle1, idSalle2, idLecteur){
        return axios.set(API_URL, {
            headers: authHeader(),
        }, 
        {
            x,
            y,
            idSalle1,
            idSalle2,
            idLecteur
        })
    }
}

