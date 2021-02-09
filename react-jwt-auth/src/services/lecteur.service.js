import http from "../http-common";

class LecteurService {
    getAll(){
        return http.get("/lecteur")
    }

    get(id){
        return http.get(`/lecteur/${id}`)
    }

    create(data){
        return http.post("/lecteur", data )
    }
}


export default new LecteurService();