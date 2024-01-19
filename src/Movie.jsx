import React from 'react'

export default function Movie(props) {
    let {title,overview,poster_path}=props.movieInfo
  return (
    <div className='col-md-3'>
        <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + poster_path} alt=""></img>
        <h3>{title}</h3>
        <p>{overview}</p>
    </div>
  )
}
