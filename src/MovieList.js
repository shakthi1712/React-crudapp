import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './App.css'
import { API } from './Global';

export default function MovieList() {
    const [movie,setMovie]=useState([]);

    const getMovies=()=>{
        fetch(`${API}/getmethod`,{
            method:"GET",
            headers:{
                "backend-token":localStorage.getItem("storetoken")
            }
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
