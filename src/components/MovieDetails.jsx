import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MovieDescription from "./MovieDescription";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=991a45eb353643be9d519427affc937f&language=en-US
  `;
  useEffect(() => {
    axios.get(URL).then((res) => {
      setMovie(res.data);
    });
  }, []);
  let src = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  return (
    <Wrapper>
      <div className="image-div">
        <Navbar />
        <img
          className="background-image"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="/"
        />
        <div className="overlay"></div>
        <MovieDescription movie={movie} src={src} />
      </div>
      <div className="added-div">

      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.article`
.added-div{
  height: 100px;
  display: none;
  @media (max-width: ${({theme})=> theme.responsive.mobile})
  {
    display: block;
  }
}
  .image-div {
    /* height: 999px;
    width: 100%; */
    .background-image {
      height: 800px;
      width: 100vw;
      /* position: absolute; */
      object-fit: cover;
      filter: blur(7px);
    }
    .overlay {
      height: 800px;
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;
export default MovieDetails;
