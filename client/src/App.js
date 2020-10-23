import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Sidebar from "./components/Sidebar/Sidebar"
import AddData from "./components/AddData/AddData"
import Dashboard from "./components/Dashboard/Dashboard"

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Sidebar />
          <Switch>
            <Route exact path="/adddata" component={AddData} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        
        
      
      </BrowserRouter>
    )
  }

}

export default App;
