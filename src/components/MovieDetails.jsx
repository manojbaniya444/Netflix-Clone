import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MovieDescription from "./MovieDescription";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Credits from "./Credits";

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
        <MovieDescription movie={movie} />
      </div>
      <div className="added-div"></div>
      <h1 className="casts">Casts</h1>
      <Credits movieI={id} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .casts {
    text-align: center;
    color: white;
    font-size: 2rem;
    padding: 1rem 0;
    background-color: rgb(3, 31, 54);
    font-family: "Roboto Condensed";
    text-transform: uppercase;
  }
  .added-div {
    height: 70px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      height: 200px;
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
