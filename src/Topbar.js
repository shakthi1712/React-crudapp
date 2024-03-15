import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Topbar({mode,setmode}) {
    const navigate=useNavigate();
  return (
   
      <AppBar position="static">
        <Toolbar className='top-bar'>
          <div>
          <Button variant="inherit" onClick={()=>navigate("/portal/movie")}>Movie</Button>
          <Button variant="inherit" onClick={()=>navigate("/portal/addmovie")}>AddMovie</Button>
          </div>
          <Button color='inherit' onClick={()=>setmode(mode === "light" ? "dark" :"light")} startIcon={mode==="light"?<Brightness7Icon />:<Brightness4Icon/>}></Button>
        </Toolbar>
      </AppBar>
  );
}