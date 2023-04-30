import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebaseConfig";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const MovieDescription = ({ movie, src }) => {
  // const [fav, setFav] = useState(false);
  // const [save, setSaved] = useState(true);
  const { showModal, setShowModal } = useAuthContext();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const movieRef = doc(db, "user", `${user?.email}`);
  const favouriteHandler = async () => {
    if (user?.email) {
      // setFav(!fav);
      // setSaved(true);
      await updateDoc(movieRef, {
        favouriteList: arrayUnion({
          id: movie?.id,
          title: movie?.title,
          img: movie?.backdrop_path,
        }),
      });
      alert("Item added to favourites successfully.");
      navigate("/account");
    } else {
      alert("First login to continue");
      navigate("/login");
    }
  };
  return (
    <WrappperDescription>
      <div className="image-div">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt="/"
        />
      </div>
      <div className="description-div">
        <h1 className="title">
          {movie?.title}{" "}
          <span className="span">({movie?.release_date.slice(0, 4)})</span>
        </h1>
        favouriteHandler
        <div className="flex3-flex">
          <div className="flex-3">
            <div className="date">{movie?.release_date}</div>
            <div className="genres">
              {movie?.genres.map((items, id) => {
                return <span key={id}>{items.name} </span>;
              })}
            </div>

            <p className="duration">{movie?.runtime} min</p>
          </div>
        </div>
        <p className="tagline">{movie?.tagline}</p>
        <h2 className="overview">Overview</h2>
        <p className="description">{movie?.overview}</p>
        <button className="favourite-btn" onClick={favouriteHandler}>
          Add to Favourites
        </button>
        <button className="watch-trailer" onClick={()=>setShowModal(true)}>Watch trailer</button>
        {showModal && <VideoPlayer id={movie?.id} />}
      </div>
    </WrappperDescription>
  );
};

const WrappperDescription = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  padding: 5rem 2rem;
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 5rem;
  z-index: 999;
  .favourite-btn {
    padding: 0.4rem 0.9rem;
    margin-top: 1rem;
    border: none;
    border-radius: 9px;
    cursor: pointer;
  }
  .image-div {
    height: 420px;
    width: 300px;
    border-radius: 9px;
    img {
      height: 420px;
      width: 300px;
      border-radius: 9px;
    }
  }
  .description-div {
    .watch-trailer {
      padding: 0.4rem 0.9rem;
      margin-top: 1rem;
      border: none;
      border-radius: 9px;
      cursor: pointer;
      background-color: red;
      color: white;
    }
    .title {
      color: white;
      font-size: 2rem;
      font-weight: 900;
    }
    .span {
      color: #e0dddd;
    }

    .flex3-flex {
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        display: flex;
        justify-content: center;
      }
      .flex-3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        width: 60%;
        @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
          justify-content: space-evenly;
          width: 100%;
        }
      }
    }
    .tagline {
      font-style: italic;
      font-size: 1.3rem;
      margin-top: 1rem;
      color: grey;
    }
    .overview {
      margin-top: 1rem;
    }
    .description {
      font-size: 1.3rem;
      margin-top: 0.3rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    gap: 1rem;
    margin-left: 50%;
    transform: translateX(-50%);
    align-items: center;
    .description-div {
      text-align: center;
    }
  }
`;

export default MovieDescription;
