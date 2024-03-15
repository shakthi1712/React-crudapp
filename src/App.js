import './App.css';
import { Routes, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Portal from './Portal';
import PageNotfound from './PageNotfound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import EditMovie from './EditMovie';
function App() {
  const [mode,setmode]=useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh"}} elevation={9}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal' element={<Portal mode={mode} setmode={setmode} />}>
        <Route path='movie' element={<MovieList />} />
        <Route path='addmovie' element={<AddMovie />} />
        <Route path="edit/:id" element={<EditMovie />} />
        <Route path='view/:id' element={<MovieDetails/>} />
        </Route>
        <Route path='*' element={<PageNotfound />} />
      </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
