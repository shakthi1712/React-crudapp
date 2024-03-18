import { Button } from '@mui/base';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API } from './Global';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setmovie] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetch(`${API}/getone/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((mv) => setmovie(mv));
    }, []);
    console.log(movie);
    const ratingStyles={
        color:movie.rating >= 7 ? "green":"red",
    };
    return (
        <div className='movie--details'>
            <iframe className='iframe' src={movie.trailer}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='movie-details-container'>
                <div className="movie-des">
                    <h2 className="movie--name">
                        {movie.name}
                    </h2>
                    <h3 className="movie--rating" style={ratingStyles}>
                        ⭐{movie.rating}
                    </h3>
                </div>
                <p className="movie--summary">
                    {movie.summary}
                </p>
            </div>
            <Button variant="contained" startIcon={<ArrowBackIcon/>} onClick={()=>navigate(-1)}/>
        </div>

    )
}
