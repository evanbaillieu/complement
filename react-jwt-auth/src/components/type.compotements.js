import React, { Component } from "react";
import TypeDataService from "../services/type.service";

export default class Type extends Component {
  constructor(props) {
    super(props);
    this.onChangeNomType = this.onChangeNomType.bind(this);
    this.onChangeNomImage = this.onChangeNomImage.bind(this);
    this.getType = this.getType.bind(this);
    this.updateType = this.updateType.bind(this);
    this.deleteType = this.deleteType.bind(this);

    this.state = {
        currentType: {
        id: null,
        nomType: "",
        nomimage: null
        
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getType(this.props.match.params.id);
  }

  onChangeNomType(e) {
    const nomType =  e.target.value
    this.setState(function(prevState) {
      return {
        currentType: {
          ...prevState.currentType,
          nomType: nomType
        }
      }
    })
  }

  onChangeNomImage(e){
    const nomimage =  e.target.value
      this.setState(function(prevState) {
        return {
            currentType: {
            ...prevState.currentType,
            nomimage: nomimage
          }
        }
      })
  }

  getType(id) {
    TypeDataService.get(id)
      .then(response => {
        this.setState({
            currentType: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateType() {
    TypeDataService.update(
      this.state.currentType.id,
      this.state.currentType
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

  deleteType() {    
    TypeDataService.delete(this.state.currentType.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/type-list')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentType } = this.state;

    return (
      <div>
        {currentType ? (
          <div className="edit-form">
            <h4>Materiel</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nomType">nomType</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomType"
                  value={currentType.nomType}
                  onChange={this.onChangeNomType}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nomimage">nomimage</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomimage"
                  value={currentType.nomimage}
                  onChange={this.onChangeNomImage}
                />
              </div>

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteType}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateType}
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