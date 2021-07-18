import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

class Table extends React.Component {
  state = {
    allMovies: [],
    currPage: 1,
  };

  componentDidMount() {
    fetch("/movies")
      .then((res)=> {
        return res.json();
      })
      .then((json) => {
        this.setState({ allMovies: json });

        this.props.sendData(json.length);
      });
  }

  render() {
    let numberOfPages = Math.ceil(this.state.allMovies.length / 5);
    let pageArr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageArr.push(i);
    }

    let starting = (this.state.currPage - 1) * 5;
    let ending = this.state.currPage * 5 - 1;

    let moviesToDisplay = this.state.allMovies.slice(
      starting,
      Math.min(ending + 1, this.state.allMovies.length)
    );

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td
                    onClick={() => {
                      let allMovies = this.state.allMovies;
                      let myIndex = allMovies.findIndex(
                        (e) => e._id === el._id
                      );

                      if (!allMovies[myIndex].liked)
                        allMovies[myIndex].liked = true;
                      else allMovies[myIndex].liked = false;

                      this.setState({ allMovies: allMovies });
                    }}
                  >
                    {el.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        let allMovies = this.state.allMovies;

                        allMovies = allMovies.filter((ele) => {
                          return ele._id !== el._id;
                        });

                        this.setState({ allMovies: allMovies });
                        this.props.sendData(allMovies.length);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => {
                this.setState({
                  currPage: Math.max(1, this.state.currPage - 1),
                });
              }}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>

            {pageArr.map((el) => {
              return (
                <li
                  className="page-item"
                  onClick={() => {
                    this.setState({ currPage: el });
                  }}
                >
                  <a className="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}

            <li
              className="page-item"
              onClick={() => {
                this.setState({
                  currPage: Math.min(pageArr.length, this.state.currPage + 1),
                });
              }}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
