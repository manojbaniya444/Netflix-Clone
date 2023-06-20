import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import requests from "../Request";
import { useAuthContext } from "../context/AuthContext";
import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
//  URL for the custom search
// const URL =
//   "https://api.themoviedb.org/3/search/movie?api_key=991a45eb353643be9d519427affc937f&language=en-US&page=1&include_adult=false&query=jaari";

// URL for the popular search
const URL = requests.requestPopular;

const HomeTop = () => {
  const [movies, setMovies] = useState([]);
  const { showModal, setShowModal } = useAuthContext();

  // Fetch function

  useEffect(() => {
    axios.get(URL).then((res) => setMovies(res.data.results));
  }, []);

  const singleMovie = movies[Math.floor(Math.random() * movies?.length)];

  // const singleMovie = movies[0];

  return (
    <WrapperTop>
      {showModal && <VideoPlayer id={singleMovie?.id} />}
      <div className="top-container">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`}
            alt="/"
          />
        </div>
        <div className="movie-detail">
          <p className="title">{singleMovie?.original_title}</p>
          <div className="btn-container">
            {/* <button className="btn1">Play</button> */}
            <button className="btn2" onClick={() => setShowModal(true)}>
              Watch Trailer
            </button>
            <Link className="btn1" to={`/moviedetail/${singleMovie?.id}`}>
              Details
            </Link>
          </div>
          <p className="release-date">
            Released date: {singleMovie?.release_date}
          </p>
          <p className="desc">{singleMovie?.overview}</p>
        </div>
      </div>
    </WrapperTop>
  );
};

const WrapperTop = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  /* height: 520px; */
  .top-container {
    height: 520px;
    .image-container {
      width: 100%;
      height: 100%;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .image-overlay {
        width: 100%;
        height: 100%;
        /* background-image: linear-gradient(to right, black); */
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
      }
    }

    .movie-detail {
      position: absolute;
      top: 150px;
      width: 100%;
      padding-left: 5%;
      .title {
        color: white;
        font-size: 2.25rem;
        font-weight: 800;
      }
      .release-date {
        color: white;
        margin-top: 1rem;
      }
      .desc {
        color: white;
        margin-top: 2rem;
        font-size: 1.3rem;
        width: 80%;
        word-spacing: 2px;
      }
      .btn-container {
        margin-top: 1rem;
        button {
          padding: 0.3rem 0.7rem;
          cursor: pointer;
        }
        .btn2 {
          border-radius: 5px;
          transition: 0.12s ease;
          border: none;
          &:hover {
            background-color: #aeaeae;
          }
        }
        .btn1 {
          margin-left: 0.5rem;
          background-color: transparent;
          color: white;
          border: 1px solid white;
          border-radius: 5px;
          padding: 0.3rem 0.7rem;
          text-decoration: none;
          font-weight: 700;
        }
      }
      //Movie detail queriy
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        .desc {
          width: 90%;
        }
      }
    }
  }
`;

export default HomeTop;
