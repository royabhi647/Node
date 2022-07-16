import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios, { Axios } from "axios";
import API_KEY from "../secrets";

export default class List extends Component {
  constructor() {
    super();
    console.log("constructor is called");
    this.state = {
      hover: "",
      parr: [1],

      currPage: 1,
      movies: [],
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  async componentDidMount() {
    console.log("componentDidMount is called");
    let ans = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c7ee8fb81b5b5a537ef10f0f68bcd0c2&language=en-US&page=2"
      );
    console.log(ans.data);

    this.setState({
      movies: [...ans.data.results]
    });
  }

  render() {
    console.log("render is called");

    // let movie = movies.results;
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(movieObj.id)}
                  onMouseLeave={this.handleLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top "
                    alt="..."
                    style={{ height: "40vh" }}
                  />
                  {/* <div className="card-body banner-title"> */}
                  <h5 className="card-title movie-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                  <div className="button-wrapper">
                    {this.state.hover == movieObj.id && 
                      <a href="#" class="btn btn-danger movie-button">
                        Add to Favourites
                      </a>
                    }
                  </div>
                </div>
              ))}
              <div className="page-ination">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>

                    {
                      this.state.parr.map((pageNum) => (
                        <li className="page-item">
                          <a className="page-link" href="#">
                            {pageNum}
                          </a>
                        </li>
                      ))
                    }

                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
