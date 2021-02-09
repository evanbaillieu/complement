import http from "../http-common";

class TypeService {
    getAll(){
        return http.get("/type")
    }

    get(id){
        return http.get(`/type/${id}`)
    }

    create(data){
        return http.post("/type", data )
    }

    update(id, data) {
        return http.put(`/type/${id}`, data);
    }

    delete(id) {
        return http.delete(`/type/${id}`);
    }
}


export default new TypeService();