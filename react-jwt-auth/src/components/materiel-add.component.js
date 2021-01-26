import React, { Component } from "react";
import TypeDataService from "../services/type.service";
import MaterielDataService from "../services/materiel.service";

export default class AddMateriel extends Component {
  constructor(props) {
    super(props);
    this.onChangeIdBadge = this.onChangeIdBadge.bind(this);
    this.onChangeNomMateriel = this.onChangeNomMateriel.bind(this);
    this.onChangeIdType = this.onChangeIdType.bind(this);
    this.saveMateriel = this.saveMateriel.bind(this);
    this.newMateriel = this.newMateriel.bind(this);
    this.retrieveType = this.retrieveType.bind(this);

    this.state = {
      id: null,
      idBadge: "",
      nomMateriel: "",
      idType: null,
      types: [],
      currentType: {},
      submitted: false
    };
  }

  componentDidMount() {
      this.retrieveType();
  }

  onChangeIdBadge(e) {
    this.setState({
      idBadge: e.target.value
    });
  }

  onChangeIdType(e){
      this.setState({
          idType: e.target.value
      })
      console.log(e.target.value)
  }
  
  onChangeNomMateriel(e){
      this.setState({
        nomMateriel: e.target.value
      })
  }

  retrieveType() {
    TypeDataService.getAll()
      .then(response => {
        this.setState({
          types: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  saveMateriel() {
    var data = {
        idBadge: this.state.idBadge,
        newDataControle: this.state.newDataControle,
        nomMateriel: this.state.nomMateriel,
        idType: this.state.idType
    };
    console.log(data);
    MaterielDataService.create(data)
      .then(response => {
        this.setState({
            id: response.data.id,
            idBadge: response.data.idBadge,
            nomMateriel: response.data.nomMateriel,
            idType: response.data.idType,
            submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newMateriel() {
    this.setState({
        id: null,
        idBadge: "",
        newDataControle: null,
        nomMateriel: "",
        idType: null,
        submitted: false
    });
  }
  render() {
    const { types } = this.state;
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="idBadge">idBadge</label>
              <input
                type="text"
                className="form-control"
                id="IdBadge"
                required
                value={this.state.idBadge}
                onChange={this.onChangeIdBadge}
                name="idBadge"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomMateriel">Nom Materiel</label>
              <input
                type="text"
                className="form-control"
                id="nomMateriel"
                required
                value={this.state.nomMateriel}
                onChange={this.onChangeNomMateriel}
                name="nomMateriel"
              />
            </div>

            <div className="form-group">
                <label htmlFor="currentType">Nom Materiel</label>
                <select id="currentType" value={this.state.idType} onChange={this.onChangeIdType}>
                    {types && 
                        types.map((type, index) => (
                            <option 
                            value={type.id} 
                            key={index}>{type.nomType}</option>
                        ))
                    }
                </select>
            </div>

            <button onClick={this.saveMateriel} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}