import React from 'react'
import Counter from './Counter'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import './App.css'
import { useNavigate } from 'react-router-dom';

export default function Movie({ movieTake,getMovies }) {
    const [show, setshow] = useState(false);
    const navigate = useNavigate();
    const deleteMovie=(id)=>{
            fetch(`https://65f16b76034bdbecc7626ffb.mockapi.io/Movie1/${id}`,{
                method:"DELETE",
            }).then(()=>getMovies())
            .then(()=>alert("Movie deleted"))
    }
    return (
        <Card className='movie-container'>
            <img className='movie-poster' src={movieTake.poster} />
            <CardContent>
                <div className="movie-spec">
                    <h2>{movieTake.name}</h2>
                    <div className='spec-cont'>
                        <h2 className="movie-name"><IconButton
                            onClick={() => setshow(!show)} aria-label="Toggle-Description" color='primary'>
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                            <IconButton>
                                <InfoIcon fontSize='small' color='primary' onClick={() => navigate(`/portal/view/${movieTake.id}`)} />
                            </IconButton></h2>
                        <h3 className="movie-rating">⭐{movieTake.rating}</h3>
                    </div>
                </div>
            </CardContent>
            {show ? <p className="movie-summary">{movieTake.summary}
            </p> : null}
            <CardActions className='card-action'>
                <Counter />
                <div>
                <IconButton
                    onClick={() => navigate(`/portal/edit/${movieTake.id}`)}
                >
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton
                   onClick={()=>deleteMovie(movieTake.id)}
                >
                    <DeleteIcon color='primary' />
                </IconButton>
                </div>

            </CardActions>
        </Card>
    )
}
