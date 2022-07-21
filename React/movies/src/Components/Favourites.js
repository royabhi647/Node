import React, { Component } from "react";
import axios from 'axios';

export default class Favourites extends Component {
    constructor(){
        super();
        this.state={
            movies:[],
            genre:[],
            currGenre:"All Genre",
          };
    }

    async componentDidMount () {
        let ans = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=c7ee8fb81b5b5a537ef10f0f68bcd0c2&language=en-US&page=1`
        );
        let genreId = {
          28: "Action",
          12: "Adventure",
          16: "Animation",
          35: "Comedy",
          80: "Crime",
          99: "Documentary",
          18: "Drama",
          10751: "Family",
          14: "Fantasy",
          36: "History",
          27: "Horror",
          10402: "Music",
          9648: "Mystery",
          10749: "Romance",
          878: "Sci-Fi",
          10770: "TV",
          53: "Thriller",
          10752: "War",
          37: "Western",
        };

        let genreArr = [];
        ans.data.results.map((movieObj) => {
          if(!genreArr.includes(genreId[movieObj.genre_ids[0]])){
            genreArr.push(genreId[movieObj.genre_ids[0]]);
          }
        });

        genreArr.unshift("All Genre");
        console.log(genreArr);
        

        this.setState({
            movies: [...ans.data.results], //[{},{},{}]
            genre:[...genreArr]
        });
    }

  render() {
    let genreId={
      28:'Action',
      12:'Adventure',
      16:'Animation',
      35:'Comedy',
      80:'Crime',
      99:'Documentary',
      18:'Drama',
      10751:'Family',
      14:'Fantasy',
      36:'History',
      27:'Horror',
      10402:'Music',
      9648:'Mystery',
      10749:'Romance',
      878:'Sci-Fi',
      10770:'TV',
      53:'Thriller',
      10752:'War',
      37:'Western'
    };
    
    return (
      //   <div>Favourites</div>
      <div class="row">
        <div class="col-3 favourites-list">
          <ul class="list-group">
            {
              this.state.genre.map((genre) => (
                this.state.currGenre==genre ?
                <li class="list-group-item active" aria-current="true">
                    {genre}
                </li> :
                <li class="list-group-item" aria-current="true">
                    {genre}
                </li>
              ))
            }
            </ul>
        </div>
        
        <div class="col favourites-table">

        </div>
      </div>
    ); 
  }
}
