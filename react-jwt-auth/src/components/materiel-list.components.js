import React, { Component } from "react";
import MaterielDataService from "../services/materiel.service";
import TypeDataService from "../services/type.service"
import LocalisationDataService from "../services/localisation.service"
import SalleDataService from "../services/salle.service"
import { Link } from "react-router-dom";

export default class MaterielList extends Component {
  constructor(props) {
    super(props);
    this.retrieveMateriels = this.retrieveMateriels.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMateriel = this.setActiveMateriel.bind(this);
    this.retrieveLocalisation = this.retrieveLocalisation.bind(this);
    this.retrieveType = this.retrieveType.bind(this);
    this.retrieveSalle = this.retrieveSalle.bind(this);

    this.state = {
      materiels: [],
      currentMateriel: null,
      currentIndex: -1,
      currentType: null,
      currentLocalisation: null,
      currentSalle: null
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
    this.retrieveMateriels();
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
    this.retrieveType(materiel.idType)
    LocalisationDataService.findByIdMaterial(materiel.id)
    .then(response => {
      console.log(response.data)
       this.retrieveSalle(response.data.idSalle)
    }).catch(e => {
      console.log(e);
    })
    
  }

  retrieveLocalisation(idMateriel){
    LocalisationDataService.findByIdMaterial(idMateriel)
    .then(response => {
      this.setState({
        currentLocalisation: response.data
      })
      console.log(response.data);
    }).catch(e => {
      console.log(e);
    })
  }

  retrieveSalle(idSalle){
    SalleDataService.get(idSalle)
    .then(response => {
      this.setState({
        currentSalle: response.data
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e);
    })
  }

  retrieveType(idType){
    TypeDataService.get(idType)
    .then(response => {
      this.setState({
        currentType: response.data
      })
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    const { materiels, currentMateriel, currentIndex, currentType, currentSalle } = this.state;

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
          
          <Link to={"/materiel-add"} className="m-3 btn btn-sm btn-success" >
                Add
            </Link>
        </div>
        <div className="col-md-6">
          {currentMateriel ? (
            <div>
              <h4>Materiels</h4>
              <div>
                <label>
                  <strong>idbadge:</strong>
                </label>{" "}
                {currentMateriel.idBadge}
              </div>
              <div>
                <label>
                  <strong>newdateControle:</strong>
                </label>{" "}
                {currentMateriel.newDateControle}
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
                  <strong>type:</strong>
                </label> {" "}
                {currentType ? (currentType.nomType) : "not found"}
              </div>
              <div>
                <label>
                  <strong>salle:</strong>
                </label>
                {currentSalle ? (currentSalle.nomSalle) : "not found"}
              </div>

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