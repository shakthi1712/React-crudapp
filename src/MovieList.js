import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './App.css'

export default function MovieList() {
    const [movie,setMovie]=useState([]);

    const getMovies=()=>{
        fetch("https://65f16b76034bdbecc7626ffb.mockapi.io/Movie1",{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((msv)=>setMovie(msv));
    };
    useEffect(()=>{
        getMovies()
    },[]);
    // console.log(movie);
  return (
    <div  className='movie-l'>
        {movie.map((list,index)=>(
            <div key={index}>
                <Movie movieTake={list} getMovies={getMovies}/>
            </div>
        ))}
    </div>
  )
}
