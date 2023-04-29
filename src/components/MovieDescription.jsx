import React from "react";
import styled from "styled-components";

const MovieDescription = ({ movie, src }) => {
  return (
    <WrappperDescription>
      <div className="image-div">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>
      <div className="description-div">
        <h1 className="title">
          {movie?.title}{" "}
          <span className="span">({movie?.release_date.slice(0, 4)})</span>
        </h1>
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
      </div>
    </WrappperDescription>
  );
};

const WrappperDescription = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  padding: 5rem;
  display: flex;
  gap: 1rem;
  /* position: absolute;
  top: 5rem; */

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
      margin-top: 1rem;    }
    .description {
      font-size: 1.2rem;
      margin-top: .3rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    width: 500px;
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
