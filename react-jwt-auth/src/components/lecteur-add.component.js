import React, { Component } from "react";
import LecteurDataService from "../services/lecteur.service";

export default class LecteurAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeIp = this.onChangeIp.bind(this);
    this.onChangeModele = this.onChangeModele.bind(this);
    this.saveLecteur = this.saveLecteur.bind(this);
    this.newLecteur = this.newLecteur.bind(this);

    this.state = {
      id: null,
      ip: "",
      modele: "",
      etatOn: null,
      submitted: false
    };
  }

  onChangeIp(e) {
    this.setState({
        ip: e.target.value
    });
  }

  onChangeModele(e){
      this.setState({
        modele: e.target.value
      })
  }

  saveLecteur() {
    var data = {
        ip: this.state.ip,
        modele: this.state.modele,
        etatOn: 0,
    };
    console.log(data);
    LecteurDataService.create(data)
      .then(response => {
        this.setState({
            id: response.data.id,
            ip: response.data.ip,
            modele: response.data.modele,
            etatOn: response.data.etatOn,
            submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newLecteur() {
    this.setState({
        id: null,
        ip: "",
        modele: "",
        etatOn: null,
        submitted: false
    });
  }
  render() {
    
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newLecteur}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="ip">ip :</label>
              <input
                type="text"
                className="form-control"
                id="ip"
                required
                value={this.state.ip}
                onChange={this.onChangeIp}
                name="ip"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomMateriel">modele :</label>
              <input
                type="text"
                className="form-control"
                id="modele"
                required
                value={this.state.modele}
                onChange={this.onChangeModele}
                name="modele"
              />
            </div>

            <button onClick={this.saveLecteur} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}