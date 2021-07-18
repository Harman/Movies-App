import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Showing {this.props.noOfMovies} movies from the database</p>
        <button type="button" className="btn btn-primary mb-4">
          New
        </button>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          ></input>
        </div>
      </div>
    );
  }
}

export default Search;
