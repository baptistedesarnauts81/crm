import React, { Component } from "react";


class Table extends Component {
    constructor(props){
        super(props);
    }
  render() {
      return(
        <table class="table table-hover">
            <thead class="thead-dark">
            <tr>
                <th scope="col"></th>
                {this.props.listHeaders.map((elt,index) => {
                    return (<th key={index} scope="col">{elt}</th>)
                })}
            </tr>
            </thead>
            <tbody>{this.props.listItems}</tbody>
        </table>
        );
    }
}

export default Table;