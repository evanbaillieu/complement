import React, { Component } from "react";
import MaterielDataService from "../services/materiel.service";
import TypeDataService from "../services/type.service"
import { Link } from "react-router-dom";

export default class MaterielList extends Component {
  constructor(props) {
    super(props);
    this.retrieveMateriels = this.retrieveMateriels.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMateriel = this.setActiveMateriel.bind(this);
    this.removeAllMateriels = this.removeAllMateriels.bind(this);

    this.state = {
      materiels: [],
      currentMateriel: null,
      currentIndex: -1,
      currentType: null
    };
  }

  componentDidMount() {
    this.retrieveMateriels();
  }

  retrieveMateriels() {
    MaterielDataService.getAll()
      .then(response => {
        this.setState({
          materiels: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentMateriel: null,
      currentIndex: -1
    });
  }

  setActiveMateriel(materiel, index) {
    this.setState({
      currentMateriel: materiel,
      currentIndex: index
    });
    

    TypeDataService.getbyid(materiel.id)
    .then(response => {
      this.state({
        currentType: response
      })
    })
  }

  removeAllMateriels() {
    MaterielDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { materiels, currentMateriel, currentIndex, currentType } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Materiels List</h4>

          <ul className="list-group">
            {materiels &&
              materiels.map((materiel, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMateriel(materiel, index)}
                  key={index}
                >
                  {materiel.nomMateriel}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllMateriels}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentMateriel ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>idbadge:</strong>
                </label>{" "}
                {currentMateriel.idBadge}
              </div>
              <div>
                <label>
                  <strong>dateControle:</strong>
                </label>{" "}
                {currentMateriel.dateControle}
              </div>
              <div>
                <label>
                  <strong>nomMateriel:</strong>
                </label>{" "}
                {currentMateriel.nomMateriel}
              </div>
                <div>
                  <label>
                    <strong>{currentType ? (currentType.nomType) : "not found"}</strong>
                  </label>
                </div>
              )

              <Link
                to={"/materiel/" + currentMateriel.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Materiel..</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}