import React, { Component } from "react";
import MaterielDataService from "../services/materiel.service";

export default class Materiel extends Component {
  constructor(props) {
    super(props);
    this.onChangeIdBadge = this.onChangeIdBadge.bind(this);
    this.onChangeNomMateriel = this.onChangeNomMateriel.bind(this);
    this.onChangeIdType = this.onChangeIdType.bind(this);
    this.getMateriel = this.getMateriel.bind(this);
    this.updateMateriel = this.updateMateriel.bind(this);
    this.deleteMateriel = this.deleteMateriel.bind(this);

    this.state = {
        currentMateriel: {
        id: null,
        idBadge: "",
        idType: null,
        nomMateriel: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getMateriel(this.props.match.params.id);
  }

  onChangeIdBadge(e) {
    const idBadge =  e.target.value
    this.setState(function(prevState) {
      return {
        currentMateriel: {
          ...prevState.currentTutorial,
          idBadge: idBadge
        }
      }
    })
  }

  onChangeIdType(e){
    const idType =  e.target.value
      this.setState(function(prevState) {
        return {
          currentMateriel: {
            ...prevState.currentTutorial,
            idType: idType
          }
        }
      })
  }
  
  onChangeNomMateriel(e){
    const nomMateriel =  e.target.value
    this.setState(function(prevState) {
      return {
      currentMateriel: {
          ...prevState.currentTutorial,
          nomMateriel: nomMateriel
        }
      }
    })
  }

  getMateriel(id) {
    MaterielDataService.get(id)
      .then(response => {
        this.setState({
            currentMateriel: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateMateriel() {
    MaterielDataService.update(
      this.state.currentMateriel.id,
      this.state.currentMateriel
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The materiel was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteMateriel() {    
    MaterielDataService.delete(this.state.currentMateriel.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/materiel-list')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentMateriel } = this.state;

    return (
      <div>
        {currentMateriel ? (
          <div className="edit-form">
            <h4>Materiel</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">IdBadge</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentMateriel.idBadge}
                  onChange={this.onChangeIdBadge}
                />
              </div>
              <div className="form-group">
                <label htmlFor="IdType">IdType</label>
                <input
                  type="number"
                  className="form-control"
                  id="IdType"
                  value={currentMateriel.idType}
                  onChange={this.onChangeIdType}
                />
              </div>
              <div className="form-group">
                <label htmlFor="NomMateriel">nomMateriel</label>
                <input
                  type="text"
                  className="form-control"
                  id="NomMateriel"
                  value={currentMateriel.nomMateriel}
                  onChange={this.onChangeNomMateriel}
                />
              </div>

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteMateriel}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateMateriel}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}