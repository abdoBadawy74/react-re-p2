import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Movies() {
  let [trendingMovies, settrendingMovies] = useState([]);

  async function getMovies() {
    // let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d`)
    // console.log(response.data.results);

    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d`
    );
    console.log(data.results);
    settrendingMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* {trendingMovies.map((movie, i) => (
            <div key={i} className="col-md-3">
              <img
                className="w-100"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt=""
              />
              <h5>{movie.title}</h5>
              <p>{movie.overview}</p>
            </div>
          ))} */}

          {
            trendingMovies.map((movie,i)=> <Movie key={i} movieInfo={movie}></Movie>)
          }
        </div>
      </div>
    </div>
  );
}

// https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d
