import http from "../http-common";

class MaterielService {
    getAll(){
        return http.get("/materiel")
    }

    get(id){
        return http.get(`/materiel/${id}`)
    }

    create(data){
        return http.post("/materiel", data )
    }
    
    update(id, data) {
        return http.put(`/materiel/${id}`, data);
    }

    delete(id) {
        return http.delete(`/materiel/${id}`);
    }

    findBynomMaterial(nomMateriel){
        return http.get(`/materiel?nomMateriel=${nomMateriel}`)
    }
}


export default new MaterielService();