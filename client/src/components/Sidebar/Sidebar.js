import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Tableau de bord
        </a>
        <a id="add_data" className="menu-item" href="/adddata">
          Ajout de données
        </a>
        <a id="data_manager" className="menu-item" href="/datamanager">
          Gérer les données
        </a>
      </Menu>
    );
  }
}
export default Sidebar;
