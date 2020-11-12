import React, { Component } from "react";
import Axios from 'axios'
import "./Dashboard.css"

class Dashboard extends Component {

    constructor(props){
        super(props);
    };

    fetchdata(){}

    render(){
        return(
            <div class = "main">
                <h1>Dashboard</h1>
                <iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMjg3NDVmZjYtYmQyOC00MmNlLWFkZDktNTNjNWVhOWQ5ZGY2IiwidCI6ImI3M2MzZGU3LTcxYmMtNGRkNC04ZDlmLWNlMTRlMTY5NDA3OCJ9" frameborder="0" allowFullScreen="true"></iframe>
                <iframe width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiMjg3NDVmZjYtYmQyOC00MmNlLWFkZDktNTNjNWVhOWQ5ZGY2IiwidCI6ImI3M2MzZGU3LTcxYmMtNGRkNC04ZDlmLWNlMTRlMTY5NDA3OCJ9&pageName=ReportSection29fa2e7c3180e0a11da0" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        

        )
    }
};

export default Dashboard