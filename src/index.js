import ReactDOM from "react-dom";
import React, { Component } from "react";
import Table from "./components/Table";

class Home extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
