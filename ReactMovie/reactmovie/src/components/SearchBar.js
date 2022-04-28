import React, { Component } from "react";

export default class SearchBar extends Component {
  handleFormSubmit = (event)=> {
    event.preventDefault(); //preventDefault formun varsayılan davranısını durdurup sayfanın refresh olmasını engellemek icin kullanıyoruz
    //console.log("Search from submitted")
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <div className="row mb-5">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Search a movie"
                //onChange={(event) => console.log(event.target.value)}
                // onChange={(event) => this.setState({search:event.target.value})}
                onChange = {this.props.searchMovieProp}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
