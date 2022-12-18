import {useEffect, useState} from "react";
import styled from 'styled-components'
import Bg from './assets/bg.jpeg'
import MovieCard from "./MovieCard";
import './App.css'

const API_URL = "http://www.omdbapi.com?apikey=2ed18afb";


function App() {
  const [movies, setMovies] = useState([
    
        
        {
          "Title": "Star Wars: Episode II - Attack of the Clones",
          "Year": "2002",
          "imdbID": "tt0121765",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        },
        {
          "Title": "Rogue One: A Star Wars Story",
          "Year": "2016",
          "imdbID": "tt3748528",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
        },
        {
          "Title": "Star Wars: Episode VIII - The Last Jedi",
          "Year": "2017",
          "imdbID": "tt2527336",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
        },
        {
          "Title": "Star Wars: Episode IX - The Rise of Skywalker",
          "Year": "2019",
          "imdbID": "tt2527338",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
        }
      
    
  ]);

  return (
    <Container className='con'>
      <div className="logo">
        <span className="logo1" >
          <h2>MyTestApp</h2>
        </span>
      </div>
     

      <Body>
        <div className="text">
          <h1>watch something incredible.</h1>
        </div>
      </Body>


      <Searchcon>
        <Searchtext>Search</Searchtext>
        <div className="search"><Searchbox className="search"></Searchbox></div>
      </Searchcon>
       
      <Moviecon>
        <MovieCard movies={movies} />
      </Moviecon>
  

    </Container>
  )
}

export default App

const Container = styled.div`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;    
  right: 0;
  z-index: 10000000;
`
const Body = styled.div`
  width: 1440px;
  height: 600px;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-attachment: fixed;
`

const Searchcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 1306px;
  height: 89px;
  left: 77px;
  top: 651px;
`

const Searchtext = styled.div`
width: 77px;
height: 31px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 31px;

color: #000000;
`

const Searchbox = styled.input`
box-sizing: border-box;


height: 54px;

border: 1px solid #000000;


`
const Moviecon = styled.div`
  margin-top: 200px;
  float: left;

`
const Responsive = styled.span`
  @media(max-width: 857px){
    display: none;
  }

`