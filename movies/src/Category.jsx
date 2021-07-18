import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [],
    activeButton: "All",
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
      <div className="btn-group-vertical btn-group-lg">
        <button
          className={"btn btn-outline-primary" + (this.state.activeButton === "All" ? " active" : "")}
          key="All"
          onClick={() => {
            this.props.sendGenre("All");
            this.setState({activeButton: "All"});
          }}
        >
          All
        </button>
        {this.state.allGenre.map((el) => {
          return (
            <button
              className={"btn btn-outline-primary" + (this.state.activeButton === el.name ? " active" : "")}
              key={el._id}
              onClick={() => {
                this.props.sendGenre(el.name);
                this.setState({activeButton: el.name});
              }}
            >
              {el.name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Category;
