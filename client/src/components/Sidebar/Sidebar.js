import React, { Component } from "react";
import { push as Menu } from 'react-burger-menu'
import "./Sidebar.css"

class Sidebar extends Component {

    constructor(props){
        super(props);
    };

    render() {

        return(
            <Menu>
                <a id="home" className="menu-item" href="/dashboard">Home</a>
                <a id="add_data" className="menu-item" href="/adddata">Add Data</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}
export default Sidebar