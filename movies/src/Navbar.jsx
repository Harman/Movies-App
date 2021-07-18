import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { activeTab: "movies" };

  render() {
    let currTab = this.state.activeTab;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => {
              this.setState({ activeTab: "movies" });
            }}
          >
            MovieRentals
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    currTab === "movies" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    this.setState({ activeTab: "movies" });
                  }}
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currTab === "customers" ? "nav-link active" : "nav-link"
                  }
                  to="/customers"
                  onClick={() => {
                    this.setState({ activeTab: "customers" });
                  }}
                >
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currTab === "rentals" ? "nav-link active" : "nav-link"
                  }
                  to="/rentals"
                  onClick={() => {
                    this.setState({ activeTab: "rentals" });
                  }}
                >
                  Rentals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currTab === "login" ? "nav-link active" : "nav-link"
                  }
                  to="/login"
                  onClick={() => {
                    this.setState({ activeTab: "login" });
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
