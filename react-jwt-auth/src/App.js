import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component"
import MaterielList from "./components/materiel-list.components"
import AddMateriel from "./components/materiel-add.component"
import TypeList from "./components/type-list.compotements"
import TypeAdd from "./components/type-add.component"
import LecteurList from "./components/lecteur-list.compotements"
import AddLecteur from "./components/lecteur-add.component"
import Materiel from "./components/materiel.compotements"
import Type from "./components/type.compotements"
import Lecteur from "./components/lecteur.compotements"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            localisation materiels
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/materiel-list"} className="nav-link">
                  materiel-list
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/type-list"} className="nav-link">
                type-list
              </Link>
            </li> 

            <li className="nav-item">
              <Link to={"/lecteur-list"} className="nav-link">
                lecteur-list
              </Link>
            </li>
            
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/materiel-list"]} component={MaterielList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/type-list" component={TypeList} />
            <Route path="/materiel-add" component={AddMateriel} />
            <Route path="/type-add" component={TypeAdd} />
            <Route path="/lecteur-list" component={LecteurList} />
            <Route path="/lecteur-add" component={AddLecteur} />
            <Route path="/materiel/:id" component={Materiel} />
            <Route path="/type/:id" component={Type} />
            <Route path="/lecteur/:id" component={Lecteur} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;