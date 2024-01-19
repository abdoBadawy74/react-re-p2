import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Movies() {

let [trendingMovies, settrendingMovies] = useState([])

  async function getMovies(){
    
    
    // let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d`)
    // console.log(response.data.results);



    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d`)
    console.log(data.results);
    settrendingMovies(data.results)
  }



  useEffect(()=>{


    getMovies()


  },[])



  return (
    <div>
      Movies
    </div>
  )
}


// https://api.themoviedb.org/3/trending/movie/week?api_key=5b6d2f21c07b6b480b047d8a71c3824d