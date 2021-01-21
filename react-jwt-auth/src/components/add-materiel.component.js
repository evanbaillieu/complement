import React, { Component } from "react";
import MaterielDataService from "../services/materiel.service";

export default class AddMateriel extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      idBadge: "",
      dateControle: null, 
      newDateControle:  null,
      nomMateriel: "",
      idType: null,
      cuurentType: null,
      submitted: false
    };
  }

  onChangeidBadge(e) {
    this.setState({
      idBadge: e.target.value
    });
  }

  onChangenomMateriel(e) {
    this.setState({
        nomMateriel: e.target.value
    });
  }

  onChangedateControle(e) {
      this.setState({
          dateControle: e.target.value
      })
  }

  onChangenewDateControle(e) {
      this.setState({
          newDateControle: e.target.value
      })
  }

  onChangeidType(e){
      this.setState({
          idType: e.target.value
      })
  }

  saveMateriel() {
    var data = {
      idBadge: this.state.idBadge,
      dateControle: this.state.dateControle, 
      newDateControle: this.state.newDateControle,
      nomMateriel: this.state.nomMateriel,
      idType: this.state.idType,
    };

    MaterielDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newmateriel() {
    this.setState({
        id: null,
        idBadge: "",
        dateControle: null, 
        newDateControle:  null,
        nomMateriel: "",
        idType: null,
        submitted: false
    });
  }
  render() {
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
              <label htmlFor="idBadge">idBage : </label>
              <input
                type="text"
                className="form-control"
                id="idBadge"
                required
                value={this.state.idBadge}
                onChange={this.onChangeidBadge}
                name="idBadge"
              />
            </div>

            <div class="form-group">
              <label htmlFor="dateControle">dateControle : </label>
              <input 
                type="date"
                className="form-control"
                id="dateControle"
                required
                value={this.state.dateControle}
                onchange={this.onChangedateControle}
                name="dateControle"
                />
            </div>

            <div class="form-group">
              <label htmlfor="newDateControle">newDateControle : </label>
              <input 
                type="date"
                className="form-control" 
                id="" 
                required
                value={this.state.newDateControle}
                onchange={this.onChangenewDateControle}
                name="newDateControle"
                />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
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