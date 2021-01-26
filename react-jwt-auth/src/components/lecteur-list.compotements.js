import React, { Component } from "react";
import LecteurDataService from "../services/lecteur.service"
import { Link } from "react-router-dom";

export default class LecteurList extends Component {
  constructor(props) {
    super(props);
    this.retrieveLecteur = this.retrieveLecteur.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveLecteur = this.setActiveLecteur.bind(this);
    

    this.state = {
      lecteurs: [],
      currentLecteur: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveLecteur();
  }

  retrieveLecteur() {
    LecteurDataService.getAll()
      .then(response => {
        this.setState({
          lecteurs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveType();
    this.setState({
      currentLecteur: null,
      currentIndex: -1
    });
  }

  setActiveLecteur(lecteur, index) {
    this.setState({
      currentLecteur: lecteur,
      currentIndex: index
    });
  }


  render() {
    const { lecteurs , currentLecteur, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Lecteur List</h4>

          <ul className="list-group">
            {lecteurs &&
              lecteurs.map((lecteur, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveLecteur(lecteur, index)}
                  key={index}
                >
                  {lecteur.ip}
                </li>
              ))}
          </ul>

            <Link to={"/lecteur-add"} className="m-3 btn btn-sm btn-success" >
                Add
            </Link>
          
        </div>
        <div className="col-md-6">
          {currentLecteur ? (
            <div>
              <h4>lecteur</h4>
              <div>
                <label>
                  <strong>ip:</strong>
                </label>{" "}
                {currentLecteur.ip}
              </div>
              <div>
                <label>
                  <strong>modele :</strong>
                </label>{" "}
                {currentLecteur.modele}
              </div>
              <div>
                <label>
                  <strong>etatOn :</strong>
                </label>{" "}
                {(currentLecteur.etatOn === 1)? "Alummer" : "Eteindre" }
              </div>
              

              <Link
                to={"/materiel/" + currentLecteur.id}
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