import React, { Component } from "react";
import axios from "axios";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.props.catProp.map((cat) => (
              <tr key={cat.id}>
                <th scope="row">{cat.id}</th>
                <td>{cat.name}</td>
                <td>
                  <button className="btn btn-primary btn-sm">E</button>
                  <button className="btn btn-warning btn-sm">U</button>
                  <button className="btn btn-danger btn-sm">D</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}