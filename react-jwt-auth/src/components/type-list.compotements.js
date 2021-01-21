import React, { Component } from "react";
import TypeDataService from "../services/type.service"
import { Link } from "react-router-dom";

export default class MaterielList extends Component {
  constructor(props) {
    super(props);
    this.retrieveType = this.retrieveType.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveType = this.setActiveType.bind(this);
    this.removeAllType = this.removeAllType.bind(this);

    this.state = {
      types: [],
      currentType: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveMateriels();
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

  refreshList() {
    this.retrieveType();
    this.setState({
      currentType: null,
      currentIndex: -1
    });
  }

  setActiveType(type, index) {
    this.setState({
      currentType: type,
      currentIndex: index
    });
  }

  removeAllType() {
    TypeDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { types , currentType, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Materiels List</h4>

          <ul className="list-group">
            {types &&
              types.map((type, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveType(type, index)}
                  key={index}
                >
                  {type.nomType}
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
          {currentType ? (
            <div>
              <h4>Type</h4>
              <div>
                <label>
                  <strong>nomType:</strong>
                </label>{" "}
                {currentType.nomType}
              </div>
              <div>
                <label>
                  <strong>nomimage :</strong>
                </label>{" "}
                {currentType.nomimage}
              </div>
              )

              <Link
                to={"/materiel/" + currentType.id}
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