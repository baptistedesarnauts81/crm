import React, { Component } from "react";
import "./Sidebar.css"

class Sidebar extends Component {

    constructor(props){
        super(props);
    };

    render() {

        return(

            <div class="sidenav">
                <h2>Projet CRM</h2>
                <hr/>
                <a href="http://localhost:3000/dashboard">Dashboard</a>
                <a href="http://localhost:3000/adddata">Données</a>
                <a href="http://localhost:3000">Contact</a>
            </div>

        )
    };

}

export default Sidebar