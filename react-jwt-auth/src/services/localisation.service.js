import http from "../http-common";

class LocalisationDataService {
  getAll() {
    return http.get("/localisation");
  }

  get(id) {
    return http.get(`/localisation/${id}`);
  }

  create(data) {
    return http.post("/localisation", data);
  }

  update(id, data) {
    return http.put(`/localisation/${id}`, data);
  }

  delete(id) {
    return http.delete(`/localisation/${id}`);
  }

  deleteAll() {
    return http.delete(`/localisation`);
  }

  findByIdMaterial(idMateriel) {
    return http.get(`/localisation/idMateriel/${idMateriel}`);
  }
}

export default new LocalisationDataService();