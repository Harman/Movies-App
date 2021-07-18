import React from "react";

class Category extends React.Component {
  state = {
    allGenre: []
  };

  componentDidMount() {
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allGenre: json });
      });
  }

  render() {
    return (
      <ul className="list-group">
        {this.state.allGenre.map((el) => {
          return (
            <button className="list-group-item" key={el._id}>
              {el.name}
            </button>
          );
        })}
      </ul>
    );
  }
}

export default Category;
