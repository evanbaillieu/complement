import React, { Component } from "react";
import LecteurDataService from "../services/lecteur.service";

export default class Type extends Component {
  constructor(props) {
    super(props);
    this.onChangeIp = this.onChangeIp.bind(this);
    this.onChangeModele = this.onChangeModele.bind(this);
    this.getLecteur = this.getLecteur.bind(this);
    this.updateLecteur = this.updateLecteur.bind(this);
    this.deleteLecteur = this.deleteLecteur.bind(this);

    this.state = {
        currentLecteur: {
        id: null,
        ip: "",
        modele: "",
        
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getLecteur(this.props.match.params.id);
  }

  onChangeIp(e) {
    const ip =  e.target.value
    this.setState(function(prevState) {
      return {
        currentLecteur: {
          ...prevState.currentLecteur,
          ip: ip
        }
      }
    })
  }

  onChangeModele(e){
    const modele =  e.target.value
      this.setState(function(prevState) {
        return {
            currentLecteur: {
            ...prevState.currentLecteur,
            modele: modele
          }
        }
      })
  }

  getLecteur(id) {
    LecteurDataService.get(id)
      .then(response => {
        this.setState({
            currentLecteur: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateLecteur() {
    LecteurDataService.update(
      this.state.currentLecteur.id,
      this.state.currentLecteur
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Lecteur was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteLecteur() {    
    LecteurDataService.delete(this.state.currentLecteur.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/lecteur-list')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentLecteur } = this.state;

    return (
      <div>
        {currentLecteur ? (
          <div className="edit-form">
            <h4>Materiel</h4>
            <form>
              <div className="form-group">
                <label htmlFor="ip">ip</label>
                <input
                  type="text"
                  className="form-control"
                  id="ip"
                  value={currentLecteur.ip}
                  onChange={this.onChangeIp}
                />
              </div>
              <div className="form-group">
                <label htmlFor="modele"> modele </label>
                <input
                  type="text"
                  className="form-control"
                  id="modele"
                  value={currentLecteur.modele}
                  onChange={this.onChangeModele}
                />
              </div>

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteLecteur}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateLecteur}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a lecteur...</p>
          </div>
        )}
      </div>
    );
  }
}