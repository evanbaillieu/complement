import React, { Component } from "react";
import TypeDataService from "../services/type.service";

export default class TypeAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeNomType = this.onChangeNomType.bind(this);
    this.onChangeNomImage = this.onChangeNomImage.bind(this);
    this.saveType = this.saveType.bind(this);
    this.newType = this.newType.bind(this);

    this.state = {
      id: null,
      nomType: "",
      nomimage: "",
      submitted: false
    };
  }

  onChangeNomType(e) {
    this.setState({
        nomType: e.target.value
    });
  }

  onChangeNomImage(e){
      this.setState({
        nomimage: e.target.value
      })
      console.log(e.target.value)
  }
  
  

  saveType() {
    var data = {
        nomType: this.state.nomType,
        nomimage: this.state.nomimage
    };
    console.log(data);
    TypeDataService.create(data)
      .then(response => {
        this.setState({
            id: response.data.id,
            nomType: response.data.nomType,
            nomimage: response.data.nomimage,
            submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newType() {
    this.setState({
        id: null,
        nomType: "",
        nomimage: "",
        submitted: false
    });
  }
  render() {
    
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newType}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="idBadge">Nom Type :</label>
              <input
                type="text"
                className="form-control"
                id="IdBadge"
                required
                value={this.state.NomType}
                onChange={this.onChangeNomType}
                name="idBadge"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomMateriel">Nom Image :</label>
              <input
                type="text"
                className="form-control"
                id="nomMateriel"
                required
                value={this.state.NomImage}
                onChange={this.onChangeNomImage}
                name="nomMateriel"
              />
            </div>

            <button onClick={this.saveType} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}