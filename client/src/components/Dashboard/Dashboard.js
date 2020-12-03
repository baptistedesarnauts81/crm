import React, { Component } from "react";
import Axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  fetchdata() {}

  render() {
    return (
      <div className="container">
        <h1>Tableau de bord</h1>
        <p>
          Il s'agit d'un tableau de bord réalisé sur une base de données exemple
          locale sous powerBI. <br />
          Il ne peut donc pas être mis à jour en live en fonction des saisies.
        </p>
        {/* <iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjg3NDVmZjYtYmQyOC00MmNlLWFkZDktNTNjNWVhOWQ5ZGY2IiwidCI6ImI3M2MzZGU3LTcxYmMtNGRkNC04ZDlmLWNlMTRlMTY5NDA3OCJ9" frameborder="0" allowFullScreen="true"></iframe> */}
        <iframe
          width="1024"
          height="804"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzgyMWEwZGUtMmU1Yi00YmZmLWIzYWQtYjFjODI5ZDU1YzhjIiwidCI6ImI3M2MzZGU3LTcxYmMtNGRkNC04ZDlmLWNlMTRlMTY5NDA3OCJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    );
  }
}

export default Dashboard;
